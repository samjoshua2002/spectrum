// Solar Calculator Types and Logic based on Excel specifications

export interface SolarFormData {
  buildingType: string;
  numberOfFloors: string;
  roofType: string;
  sanctionedLoad: string;
  monthlyBill: string;
  location: string;
  subsidyPreference?: string; // 'yes', 'no', or undefined for non-eligible buildings
}

export interface BOMItem {
  description: string;
  specification: string;
  quantity: number;
  uom: string;
  rate: number;
  amount: number;
  gstRate: number;
  gstAmount: number;
}

export interface SystemSpecification {
  panelCount: number;
  panelWattage: number;
  totalPanelWattage: number;
  inverterSize: number;
  systemSizeKW: number;
  sanctionedLoadW: number;
}

export interface CostBreakdown {
  materials: number;
  labor: number;
  transportation: number;
  exportDevice: number;
  subtotal: number;
  gst: number;
  total: number;
}

export interface SubsidyCalculation {
  isEligible: boolean;
  subsidyPercentage: number;
  subsidyAmount: number;
  netInvestment: number;
}

export interface ROIData {
  year: number;
  unitsGenerated: number;
  ratePerUnit: number;
  solarIncome: number;
  currentBillCost: number;
  savings: number;
  cumulativeSavings: number;
  netCashflow: number;
}

export interface CalculationResult {
  formData: SolarFormData;
  specifications: SystemSpecification;
  bomItems: BOMItem[];
  costBreakdown: CostBreakdown;
  subsidy: SubsidyCalculation;
  roiData: ROIData[];
  paybackYears: number;
  irr: number;
}

// BOM Calculation based on Excel specifications
export function calculateSystemSpecifications(sanctionedLoadKW: number): SystemSpecification {
  const sanctionedLoadW = sanctionedLoadKW * 1000;
  const panelWattage = 580; // EMMVEE Topcon panel
  
  // Calculate number of panels (sanctioned load in W / 580W per panel, rounded UP)
  const panelCount = Math.ceil(sanctionedLoadW / panelWattage);
  const totalPanelWattage = panelCount * panelWattage;
  
  // Calculate inverter size (total wattage / 1.25, then round to nearest available size)
  const calculatedInverterSize = totalPanelWattage / 1.25;
  const availableInverterSizes = [3000, 5000, 8000, 10000, 12000, 15000, 20000, 25000, 30000];
  const inverterSize = availableInverterSizes.find(size => size >= calculatedInverterSize) || 30000;
  
  const systemSizeKW = totalPanelWattage / 1000;
  
  return {
    panelCount,
    panelWattage,
    totalPanelWattage,
    inverterSize,
    systemSizeKW,
    sanctionedLoadW // Add sanctioned load for structure calculation
  };
}

// Calculate BOM items based on system specifications
export function calculateBOM(specs: SystemSpecification, roofType: string): BOMItem[] {
  const items: BOMItem[] = [];
  
  // Solar PV Modules (EMMVEE 580W Topcon)
  items.push({
    description: "Solar PV Module",
    specification: "580 Topcon",
    quantity: specs.panelCount,
    uom: "Nos",
    rate: 14255.56, // ₹1,28,700 / 9 panels = ₹14,255.56 per panel
    amount: specs.panelCount * 14255.56,
    gstRate: 12,
    gstAmount: (specs.panelCount * 14255.56 * 0.12)
  });
  
  // Grid Tie Inverter
  const inverterRate = 56000; // Base rate, varies by size
  items.push({
    description: "Grid Tie Inverter",
    specification: `Grid tied ${specs.inverterSize}W`,
    quantity: 1,
    uom: "No",
    rate: inverterRate,
    amount: inverterRate,
    gstRate: 12,
    gstAmount: inverterRate * 0.12
  });
  
  // Panel Mounting Structure (₹8 per watt based on SANCTIONED LOAD, not total panel wattage)
  const structureCost = specs.sanctionedLoadW * 8; // ₹8 per watt of sanctioned load
  items.push({
    description: "Panel Mounting Structure",
    specification: roofType === "Sheet roof" ? "GI Structure for 6kWp" : "RCC Structure",
    quantity: 1,
    uom: "Set",
    rate: structureCost,
    amount: structureCost,
    gstRate: 18,
    gstAmount: structureCost * 0.18
  });
  
  // MC-4 Connector
  items.push({
    description: "MC-4 Connector",
    specification: "IP67 Grade Male/Female lugs",
    quantity: 8,
    uom: "Set",
    rate: 50,
    amount: 400,
    gstRate: 18,
    gstAmount: 72
  });
  
  // DC Cable
  items.push({
    description: "DC Cable",
    specification: "4sq.mm * 1C",
    quantity: 20,
    uom: "meter",
    rate: 40,
    amount: 800,
    gstRate: 18,
    gstAmount: 144
  });
  
  // AC Cable
  items.push({
    description: "AC Cable",
    specification: "6sq.mm * 4C Cu.",
    quantity: 20,
    uom: "meter",
    rate: 250,
    amount: 5000,
    gstRate: 18,
    gstAmount: 900
  });
  
  // Earthing
  items.push({
    description: "Earthing",
    specification: "Copper Cable",
    quantity: 90,
    uom: "meter",
    rate: 28,
    amount: 2520,
    gstRate: 18,
    gstAmount: 453.6
  });
  
  // ACDB
  items.push({
    description: "ACDB",
    specification: "1IN 1OUT",
    quantity: 1,
    uom: "No",
    rate: 3000,
    amount: 3000,
    gstRate: 18,
    gstAmount: 540
  });
  
  // DCDB
  items.push({
    description: "DCDB",
    specification: "1IN 1OUT",
    quantity: 1,
    uom: "No",
    rate: 3000,
    amount: 3000,
    gstRate: 18,
    gstAmount: 540
  });
  
  // Lugs
  items.push({
    description: "Lugs",
    specification: "Pin type copper lugs heavy duty 6-95mm",
    quantity: 12,
    uom: "No",
    rate: 35,
    amount: 420,
    gstRate: 18,
    gstAmount: 75.6
  });
  
  // Cable Ties
  items.push({
    description: "Cable Ties",
    specification: "300 x 4.6mm Black",
    quantity: 1,
    uom: "pkt",
    rate: 150,
    amount: 150,
    gstRate: 18,
    gstAmount: 27
  });
  
  // Labor Charges (based on actual system wattage)
  const panelMountingCost = specs.totalPanelWattage * 2.5;
  items.push({
    description: "Panel Mounting",
    specification: "Labour",
    quantity: specs.totalPanelWattage,
    uom: "watt",
    rate: 2.5,
    amount: panelMountingCost,
    gstRate: 18,
    gstAmount: panelMountingCost * 0.18
  });
  
  const electricalWorkCost = specs.totalPanelWattage * 2.5;
  items.push({
    description: "Electrical Workmanship",
    specification: "Labour",
    quantity: specs.totalPanelWattage,
    uom: "watt",
    rate: 2.5,
    amount: electricalWorkCost,
    gstRate: 18,
    gstAmount: electricalWorkCost * 0.18
  });
  
  // Transportation (Lump Sum)
  items.push({
    description: "Solar Panels",
    specification: "Lump Sum",
    quantity: 1,
    uom: "LS",
    rate: 1000,
    amount: 1000,
    gstRate: 18,
    gstAmount: 180
  });
  
  items.push({
    description: "Inverter",
    specification: "Lump Sum",
    quantity: 1,
    uom: "LS",
    rate: 1000,
    amount: 1000,
    gstRate: 18,
    gstAmount: 180
  });
  
  // Export Device
  items.push({
    description: "Device (5kW)",
    specification: "Lump Sum",
    quantity: 1,
    uom: "LS",
    rate: 30000,
    amount: 30000,
    gstRate: 18,
    gstAmount: 5400
  });
  
  return items;
}

// Calculate subsidy eligibility
export function calculateSubsidy(buildingType: string, subsidyPreference: string | undefined, totalCost: number): SubsidyCalculation {
  const eligibleTypes = ["Residential", "Apartment complex or Gated community"];
  const isEligible = eligibleTypes.includes(buildingType);
  
  // Only apply subsidy if eligible AND user chose 'yes'
  const applySubsidy = isEligible && subsidyPreference === 'yes';
  const subsidyPercentage = applySubsidy ? 30 : 0;
  const subsidyAmount = applySubsidy ? totalCost * 0.3 : 0;
  const netInvestment = totalCost - subsidyAmount;
  
  return {
    isEligible,
    subsidyPercentage,
    subsidyAmount,
    netInvestment
  };
}

// Calculate 25-year ROI projection
export function calculateROI(
  netInvestment: number,
  systemSizeKW: number,
  monthlyBill: number
): ROIData[] {
  const roiData: ROIData[] = [];
  const unitProductionRate = 4.07; // kWh per panel per year (location dependent)
  const annualUnitsGenerated = systemSizeKW * 1000 * unitProductionRate;
  const initialRatePerUnit = 9; // ₹9 per unit
  const annualEscalation = 0.02; // 2% yearly increase
  const maintenanceYears = [5, 10, 15, 20];
  const maintenanceCost = netInvestment * 0.05;
  
  let cumulativeSavings = 0;
  
  for (let year = 1; year <= 25; year++) {
    const ratePerUnit = initialRatePerUnit * Math.pow(1 + annualEscalation, year - 1);
    const solarIncome = annualUnitsGenerated * ratePerUnit;
    const currentBillCost = monthlyBill * 12 * Math.pow(1 + annualEscalation, year - 1);
    
    let yearSavings = solarIncome;
    if (maintenanceYears.includes(year)) {
      yearSavings -= maintenanceCost;
    }
    
    cumulativeSavings += yearSavings;
    const netCashflow = cumulativeSavings - netInvestment;
    
    roiData.push({
      year,
      unitsGenerated: annualUnitsGenerated,
      ratePerUnit,
      solarIncome,
      currentBillCost,
      savings: yearSavings,
      cumulativeSavings,
      netCashflow
    });
  }
  
  return roiData;
}

// Calculate payback period
export function calculatePaybackPeriod(roiData: ROIData[]): number {
  const paybackYear = roiData.find(data => data.netCashflow >= 0);
  return paybackYear ? paybackYear.year : 25;
}

// Main calculation function
export function performSolarCalculation(formData: SolarFormData): CalculationResult {
  const sanctionedLoadKW = parseFloat(formData.sanctionedLoad);
  const monthlyBill = parseFloat(formData.monthlyBill);
  
  // Step 1: Calculate system specifications
  const specifications = calculateSystemSpecifications(sanctionedLoadKW);
  
  // Step 2: Calculate BOM
  const bomItems = calculateBOM(specifications, formData.roofType);
  
  // Step 3: Calculate total costs
  const subtotal = bomItems.reduce((sum, item) => sum + item.amount, 0);
  const gst = bomItems.reduce((sum, item) => sum + item.gstAmount, 0);
  const total = subtotal + gst;
  
  const costBreakdown: CostBreakdown = {
    materials: bomItems.filter(item => !item.description.includes("Labour") && !item.description.includes("Transportation")).reduce((sum, item) => sum + item.amount, 0),
    labor: bomItems.filter(item => item.description.includes("Labour")).reduce((sum, item) => sum + item.amount, 0),
    transportation: bomItems.filter(item => item.description.includes("Transportation") || item.specification === "Lump Sum").reduce((sum, item) => sum + item.amount, 0),
    exportDevice: bomItems.find(item => item.description.includes("Device"))?.amount || 0,
    subtotal,
    gst,
    total
  };
  
  // Step 4: Calculate subsidy
  const subsidy = calculateSubsidy(formData.buildingType, formData.subsidyPreference, total);
  
  // Step 5: Calculate ROI
  const roiData = calculateROI(subsidy.netInvestment, specifications.systemSizeKW, monthlyBill);
  const paybackYears = calculatePaybackPeriod(roiData);
  
  // Calculate IRR (simplified)
  const irr = ((roiData[24].cumulativeSavings / subsidy.netInvestment - 1) / 25) * 100;
  
  return {
    formData,
    specifications,
    bomItems,
    costBreakdown,
    subsidy,
    roiData,
    paybackYears,
    irr
  };
}
