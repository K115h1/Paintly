export interface RawMaterial {
  id: string;
  name: string;
  supplier: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalCost: number;
  purchaseDate: string;
  category: string;
}

export interface ProductionBatch {
  id: string;
  batchId: string;
  productName: string;
  materials: { materialId: string; materialName: string; quantity: number; cost: number }[];
  totalCost: number;
  productionDate: string;
  quantity: number;
  status: "in-progress" | "completed" | "pending";
}

export interface InventoryItem {
  id: string;
  batchId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalValue: number;
  addedDate: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

export interface SaleRecord {
  id: string;
  invoiceId: string;
  customer: string;
  product: string;
  quantitySold: number;
  unitPrice: number;
  totalRevenue: number;
  saleDate: string;
  paymentStatus: "paid" | "pending" | "partial";
}

export interface PaymentReceipt {
  id: string;
  invoiceId: string;
  customer: string;
  paymentMethod: "cash" | "bank-transfer" | "cheque" | "pos";
  amount: number;
  date: string;
  status: "confirmed" | "pending";
}

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
}

export const rawMaterialsData: RawMaterial[] = [
  { id: "rm1", name: "Titanium Dioxide", supplier: "ChemPro Ltd", quantity: 500, unit: "kg", unitPrice: 4200, totalCost: 2100000, purchaseDate: "2025-11-02", category: "Pigment" },
  { id: "rm2", name: "Acrylic Resin", supplier: "PolyBase Inc", quantity: 300, unit: "L", unitPrice: 1800, totalCost: 540000, purchaseDate: "2025-11-05", category: "Binder" },
  { id: "rm3", name: "Calcium Carbonate", supplier: "MineralCo", quantity: 1200, unit: "kg", unitPrice: 350, totalCost: 420000, purchaseDate: "2025-11-08", category: "Filler" },
  { id: "rm4", name: "Ethylene Glycol", supplier: "SolvTech", quantity: 150, unit: "L", unitPrice: 2100, totalCost: 315000, purchaseDate: "2025-11-10", category: "Solvent" },
  { id: "rm5", name: "Zinc Oxide", supplier: "ChemPro Ltd", quantity: 200, unit: "kg", unitPrice: 3600, totalCost: 720000, purchaseDate: "2025-11-14", category: "Pigment" },
  { id: "rm6", name: "Biocide Additive", supplier: "AddiChem", quantity: 50, unit: "kg", unitPrice: 8500, totalCost: 425000, purchaseDate: "2025-11-18", category: "Additive" },
  { id: "rm7", name: "Dispersant Agent", supplier: "AddiChem", quantity: 80, unit: "kg", unitPrice: 5200, totalCost: 416000, purchaseDate: "2025-11-20", category: "Additive" },
  { id: "rm8", name: "Red Iron Oxide", supplier: "ColorMin", quantity: 100, unit: "kg", unitPrice: 6800, totalCost: 680000, purchaseDate: "2025-12-01", category: "Pigment" },
];

export const productionBatchesData: ProductionBatch[] = [
  {
    id: "pb1", batchId: "BTH-2025-001", productName: "Premium White Emulsion", productionDate: "2025-11-15", quantity: 800, totalCost: 1850000, status: "completed",
    materials: [
      { materialId: "rm1", materialName: "Titanium Dioxide", quantity: 120, cost: 504000 },
      { materialId: "rm2", materialName: "Acrylic Resin", quantity: 60, cost: 108000 },
      { materialId: "rm3", materialName: "Calcium Carbonate", quantity: 300, cost: 105000 },
    ]
  },
  {
    id: "pb2", batchId: "BTH-2025-002", productName: "Gloss Finish — Ivory", productionDate: "2025-11-22", quantity: 400, totalCost: 950000, status: "completed",
    materials: [
      { materialId: "rm1", materialName: "Titanium Dioxide", quantity: 80, cost: 336000 },
      { materialId: "rm4", materialName: "Ethylene Glycol", quantity: 30, cost: 63000 },
      { materialId: "rm7", materialName: "Dispersant Agent", quantity: 15, cost: 78000 },
    ]
  },
  {
    id: "pb3", batchId: "BTH-2025-003", productName: "Exterior Masonry Paint", productionDate: "2025-12-03", quantity: 600, totalCost: 1320000, status: "in-progress",
    materials: [
      { materialId: "rm5", materialName: "Zinc Oxide", quantity: 50, cost: 180000 },
      { materialId: "rm3", materialName: "Calcium Carbonate", quantity: 400, cost: 140000 },
      { materialId: "rm6", materialName: "Biocide Additive", quantity: 10, cost: 85000 },
    ]
  },
  {
    id: "pb4", batchId: "BTH-2025-004", productName: "Brick Red Emulsion", productionDate: "2025-12-10", quantity: 300, totalCost: 870000, status: "pending",
    materials: [
      { materialId: "rm8", materialName: "Red Iron Oxide", quantity: 40, cost: 272000 },
      { materialId: "rm2", materialName: "Acrylic Resin", quantity: 80, cost: 144000 },
    ]
  },
];

export const inventoryData: InventoryItem[] = [
  { id: "inv1", batchId: "BTH-2025-001", productName: "Premium White Emulsion", quantity: 560, unitPrice: 3800, totalValue: 2128000, addedDate: "2025-11-16", status: "in-stock" },
  { id: "inv2", batchId: "BTH-2025-002", productName: "Gloss Finish — Ivory", quantity: 90, unitPrice: 5200, totalValue: 468000, addedDate: "2025-11-23", status: "low-stock" },
  { id: "inv3", batchId: "BTH-2025-003", productName: "Exterior Masonry Paint", quantity: 600, unitPrice: 4100, totalValue: 2460000, addedDate: "2025-12-04", status: "in-stock" },
  { id: "inv4", batchId: "BTH-2025-004", productName: "Brick Red Emulsion", quantity: 0, unitPrice: 4600, totalValue: 0, addedDate: "2025-12-11", status: "out-of-stock" },
];

export const salesData: SaleRecord[] = [
  { id: "s1", invoiceId: "INV-2025-0041", customer: "BuildMart Nigeria", product: "Premium White Emulsion", quantitySold: 120, unitPrice: 3800, totalRevenue: 456000, saleDate: "2025-11-20", paymentStatus: "paid" },
  { id: "s2", invoiceId: "INV-2025-0042", customer: "Lekki Contractors Ltd", product: "Gloss Finish — Ivory", quantitySold: 80, unitPrice: 5200, totalRevenue: 416000, saleDate: "2025-11-25", paymentStatus: "partial" },
  { id: "s3", invoiceId: "INV-2025-0043", customer: "Pan-Atlantic Builders", product: "Premium White Emulsion", quantitySold: 200, unitPrice: 3800, totalRevenue: 760000, saleDate: "2025-12-02", paymentStatus: "pending" },
  { id: "s4", invoiceId: "INV-2025-0044", customer: "Mega Paints Ikeja", product: "Exterior Masonry Paint", quantitySold: 150, unitPrice: 4100, totalRevenue: 615000, saleDate: "2025-12-06", paymentStatus: "paid" },
  { id: "s5", invoiceId: "INV-2025-0045", customer: "Victoria Island Dev Co", product: "Exterior Masonry Paint", quantitySold: 200, unitPrice: 4100, totalRevenue: 820000, saleDate: "2025-12-09", paymentStatus: "paid" },
];

export const paymentsData: PaymentReceipt[] = [
  { id: "pay1", invoiceId: "INV-2025-0041", customer: "BuildMart Nigeria", paymentMethod: "bank-transfer", amount: 456000, date: "2025-11-21", status: "confirmed" },
  { id: "pay2", invoiceId: "INV-2025-0042", customer: "Lekki Contractors Ltd", paymentMethod: "cash", amount: 200000, date: "2025-11-26", status: "confirmed" },
  { id: "pay3", invoiceId: "INV-2025-0044", customer: "Mega Paints Ikeja", paymentMethod: "pos", amount: 615000, date: "2025-12-07", status: "confirmed" },
  { id: "pay4", invoiceId: "INV-2025-0045", customer: "Victoria Island Dev Co", paymentMethod: "bank-transfer", amount: 820000, date: "2025-12-10", status: "confirmed" },
];

export const expensesData: Expense[] = [
  { id: "ex1", category: "Rent", description: "Factory / warehouse rent — November", amount: 450000, date: "2025-11-01" },
  { id: "ex2", category: "Utilities", description: "Electricity — November", amount: 120000, date: "2025-11-30" },
  { id: "ex3", category: "Wages", description: "Staff wages — November", amount: 1800000, date: "2025-11-30" },
  { id: "ex4", category: "Transport", description: "Delivery logistics — November", amount: 85000, date: "2025-11-28" },
  { id: "ex5", category: "Maintenance", description: "Mixer equipment service", amount: 65000, date: "2025-12-02" },
  { id: "ex6", category: "Utilities", description: "Electricity — December (partial)", amount: 60000, date: "2025-12-10" },
  { id: "ex7", category: "Wages", description: "Staff wages — December (advance)", amount: 900000, date: "2025-12-10" },
  { id: "ex8", category: "Rent", description: "Factory / warehouse rent — December", amount: 450000, date: "2025-12-01" },
];

export function fmt(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}