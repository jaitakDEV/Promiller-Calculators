/**
 * lib/calculator.ts
 * Pure, framework-free costing logic for the Atta Costing Calculator.
 * No React, no DOM — safe to unit-test and safe to import in any component
 * (client or server).
 *
 * NOTE: arithmetic is byte-for-byte identical to the original validated
 * calculator. Do not change any formula here without re-checking against
 * known-good outputs (see the worked example in the project notes).
 */

export interface CostInputs {
  // Step 1 — Wheat & process cost (₹/kg wheat)
  wheatPrice: number;
  unloading: number;
  millingCharges: number;
  loadingOfAtta: number;

  // Step 2 — Yield (wheat → atta conversion, %)
  cleaningLossPct: number;
  grindingLossPct: number;
  processLossPct: number;
  moistureGainPct: number;

  // Step 3 — Byproduct income
  branRefractionPct: number;
  branSalePrice: number;
  branPackingMaterial: number;
  feedRefractionPct: number;
  feedSalePrice: number;
  wheatQty: number;
  boriQty: number;
  boriPrice: number;

  // Step 4 — Mill margin (kept alongside other inputs, feeds Step 4 & 5)
  millMarginPct: number;
}

export type PackKey = "5hdpe" | "5ld" | "10hdpe" | "10ld" | "50hdpe";

export interface PackMeta {
  label: string;
  weight: number;
  type: "hdpe" | "ld";
}

export const PACK_META: Record<PackKey, PackMeta> = {
  "5hdpe": { label: "5 kg HDPE", weight: 5, type: "hdpe" },
  "5ld": { label: "5 kg LD Pouch", weight: 5, type: "ld" },
  "10hdpe": { label: "10 kg HDPE", weight: 10, type: "hdpe" },
  "10ld": { label: "10 kg LD Pouch", weight: 10, type: "ld" },
  "50hdpe": { label: "50 kg HDPE", weight: 50, type: "hdpe" },
};

export interface PackSettings {
  inner: number;
  outer: number;
  gstPct: number;
  distPct: number;
  retPct: number;
  selected: PackKey;
}

export const DEFAULT_INPUTS: CostInputs = {
  wheatPrice: 30,
  unloading: 0.2,
  millingCharges: 1.5,
  loadingOfAtta: 0.25,
  cleaningLossPct: 2,
  grindingLossPct: 0.5,
  processLossPct: 0.25,
  moistureGainPct: 1,
  branRefractionPct: 4,
  branSalePrice: 22,
  branPackingMaterial: 0.5,
  feedRefractionPct: 2,
  feedSalePrice: 8,
  wheatQty: 1000,
  boriQty: 20,
  boriPrice: 10,
  millMarginPct: 12,
};

export const DEFAULT_PACK_MATERIALS: Record<PackKey, number> = {
  "5hdpe": 4,
  "5ld": 7.5,
  "10hdpe": 5,
  "10ld": 11,
  "50hdpe": 18,
};

export const DEFAULT_PACK_SETTINGS: PackSettings = {
  inner: 0.3,
  outer: 3,
  gstPct: 5,
  distPct: 5,
  retPct: 7,
  selected: "5ld",
};

// ---------------------------------------------------------------------------
// Yield
// ---------------------------------------------------------------------------
export function computeYield(inp: CostInputs) {
  const yieldPct =
    100 -
    inp.cleaningLossPct -
    inp.grindingLossPct -
    inp.branRefractionPct -
    inp.feedRefractionPct -
    inp.processLossPct +
    inp.moistureGainPct;
  return { yieldPct, yieldFrac: yieldPct / 100 };
}

// ---------------------------------------------------------------------------
// Costing (per kg wheat -> per kg atta via yield)
// ---------------------------------------------------------------------------
export interface CostingResult {
  wheatCostPerKg: number;
  unloadingPerKg: number;
  millingChargesPerKg: number;
  loadingPerKg: number;
  productCostBasePerKg: number;
  branIncomePerKg: number;
  feedIncomePerKg: number;
  otherIncomePerKg: number;
  otherIncomeTotal: number;
  costAtMillGatePerKgWheat: number;
  yieldPct: number;
  costAtMillGatePerKgAtta: number;
  millMarginPerKg: number;
  millSalePricePerKg: number;
}

export function computeCosting(inp: CostInputs): CostingResult {
  const wheatCostPerKg = inp.wheatPrice;
  const unloadingPerKg = inp.unloading;
  const millingChargesPerKg = inp.millingCharges;
  const loadingPerKg = inp.loadingOfAtta;
  const productCostBasePerKg =
    wheatCostPerKg + unloadingPerKg + millingChargesPerKg + loadingPerKg;

  const branIncomePerKg =
    (inp.branRefractionPct / 100) *
    (inp.branSalePrice - inp.branPackingMaterial);
  const feedIncomePerKg = (inp.feedRefractionPct / 100) * inp.feedSalePrice;
  const otherIncomeTotal = inp.boriQty * inp.boriPrice;
  const otherIncomePerKg =
    inp.wheatQty > 0 ? otherIncomeTotal / inp.wheatQty : 0;

  const costAtMillGatePerKgWheat =
    productCostBasePerKg - branIncomePerKg - feedIncomePerKg - otherIncomePerKg;

  const y = computeYield(inp);
  const costAtMillGatePerKgAtta =
    y.yieldFrac > 0 ? costAtMillGatePerKgWheat / y.yieldFrac : 0;

  const millMarginPerKg = costAtMillGatePerKgAtta * (inp.millMarginPct / 100);
  const millSalePricePerKg = costAtMillGatePerKgAtta + millMarginPerKg;

  return {
    wheatCostPerKg,
    unloadingPerKg,
    millingChargesPerKg,
    loadingPerKg,
    productCostBasePerKg,
    branIncomePerKg,
    feedIncomePerKg,
    otherIncomePerKg,
    otherIncomeTotal,
    costAtMillGatePerKgWheat,
    yieldPct: y.yieldPct,
    costAtMillGatePerKgAtta,
    millMarginPerKg,
    millSalePricePerKg,
  };
}

// ---------------------------------------------------------------------------
// Pack pricing (per pack size)
// ---------------------------------------------------------------------------
export interface PackPriceResult {
  costBeforeTax: number;
  gst: number;
  exFactory: number;
  marketPrice: number;
}

export function computePackPrice(
  millSalePricePerKgAtta: number,
  packWeightKg: number,
  packMaterialCost: number,
  innerMaterialPerKg: number,
  outerBag: number,
  gstPct: number,
  distributorMarginPct: number,
  retailerMarginPct: number,
): PackPriceResult {
  const innerMaterialCost = innerMaterialPerKg * packWeightKg;
  const costBeforeTax =
    millSalePricePerKgAtta * packWeightKg +
    packMaterialCost +
    innerMaterialCost +
    outerBag;
  const gst = costBeforeTax * (gstPct / 100);
  const exFactory = costBeforeTax + gst;
  const marketPrice =
    exFactory / (1 - distributorMarginPct / 100) / (1 - retailerMarginPct / 100);
  return { costBeforeTax, gst, exFactory, marketPrice };
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------
export function fmtINR(num: number): string {
  return (
    "\u20B9" +
    Number(num || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export function fmtNum(num: number, dec = 2): string {
  return Number(num || 0).toLocaleString("en-IN", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  });
}
