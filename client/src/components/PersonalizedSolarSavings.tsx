import { useState } from "react";
import { Home, Building, Users, ChevronRight, ChevronLeft, Calculator } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, LineChart, Line } from 'recharts';
import { performSolarCalculation, type SolarFormData, type CalculationResult } from "@/lib/solarCalculator";

export default function PersonalizedSolarSavings() {
  const [currentStep, setCurrentStep] = useState(1);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  
  const [formData, setFormData] = useState<SolarFormData>({
    buildingType: '',
    numberOfFloors: '',
    roofType: '',
    sanctionedLoad: '',
    monthlyBill: '',
    location: ''
  });

  const buildingTypes = [
    { value: "Residential", label: "Residential" },
    { value: "Commercial (hospital, shopping complex, hotels etc.)", label: "Commercial" },
    { value: "Industrial (Factories)", label: "Industrial" },
    { value: "Apartment complex or Gated community", label: "Apartment Complex" }
  ];

  const floorOptions = [
    { value: "Single Floor", label: "Single Floor" },
    { value: "Double Floor", label: "Double Floor" },
    { value: "3-4 Floors", label: "3-4 Floors" },
    { value: "5+ Floors", label: "5+ Floors" }
  ];

  const roofTypes = [
    { value: "Sheet roof", label: "Sheet Roof" },
    { value: "RCC Roof", label: "RCC Roof" }
  ];

  const isEligibleForSubsidy = (buildingType: string) => {
    return buildingType === "Residential" || buildingType === "Apartment complex or Gated community";
  };

  const handleNext = () => {
    // Special handling for step 1: if eligible for subsidy and haven't chosen, go to subsidy step
    if (currentStep === 1 && isEligibleForSubsidy(formData.buildingType) && !formData.subsidyPreference) {
      setCurrentStep(1.5); // Subsidy question
    } else if (currentStep === 1.5) {
      setCurrentStep(2); // Go to floors after subsidy choice
    } else if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 6) {
      // Perform calculation
      const result = performSolarCalculation(formData);
      setCalculationResult(result);
      setCurrentStep(7); // Move to results
    }
  };

  const handleBack = () => {
    if (currentStep === 1.5) {
      setCurrentStep(1); // Go back to building type from subsidy question
    } else if (currentStep === 2 && isEligibleForSubsidy(formData.buildingType)) {
      setCurrentStep(1.5); // Go back to subsidy question if eligible
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.buildingType !== '';
      case 1.5:
        return formData.subsidyPreference !== '' && formData.subsidyPreference !== undefined;
      case 2:
        return formData.numberOfFloors !== '';
      case 3:
        return formData.roofType !== '';
      case 4:
        return formData.sanctionedLoad !== '';
      case 5:
        return formData.monthlyBill !== '';
      case 6:
        return formData.location !== '';
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-building-type">
                What type of building do you have?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-building-subtitle">
                This helps us determine your subsidy eligibility
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {buildingTypes.map((type, index) => (
                <button
                  key={type.value}
                  onClick={() => setFormData({ ...formData, buildingType: type.value })}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    formData.buildingType === type.value
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                  data-testid={`button-building-${type.value.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center">
                    <p className="font-semibold text-indigo-950 font-parkinsans">{type.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 1.5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="mb-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg inline-block">
                <p className="text-green-700 font-semibold font-parkinsans">✓ You are eligible for government subsidy!</p>
              </div>
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-subsidy-question">
                Would you like to avail the government subsidy?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-subsidy-subtitle">
                30% subsidy is available for residential and apartment buildings
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => setFormData({ ...formData, subsidyPreference: 'yes' })}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  formData.subsidyPreference === 'yes'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
                data-testid="button-subsidy-yes"
              >
                <p className="font-semibold text-indigo-950 font-parkinsans text-lg">Yes, Apply Subsidy</p>
                <p className="text-sm text-gray-600 font-corbel mt-2">30% off total project cost</p>
              </button>
              <button
                onClick={() => setFormData({ ...formData, subsidyPreference: 'no' })}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  formData.subsidyPreference === 'no'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-300'
                }`}
                data-testid="button-subsidy-no"
              >
                <p className="font-semibold text-indigo-950 font-parkinsans text-lg">No, Continue Without Subsidy</p>
                <p className="text-sm text-gray-600 font-corbel mt-2">Pay full project cost</p>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-floor-count">
                How many floors does your building have?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-floor-subtitle">
                This helps us understand your property structure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {floorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFormData({ ...formData, numberOfFloors: option.value })}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    formData.numberOfFloors === option.value
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                  data-testid={`button-floors-${option.value.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <p className="font-semibold text-indigo-950 font-parkinsans">{option.label}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-roof-type">
                What type of roof do you have?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-roof-subtitle">
                Different roof types require different mounting structures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {roofTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFormData({ ...formData, roofType: type.value })}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                    formData.roofType === type.value
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                  data-testid={`button-roof-${type.value.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <p className="font-semibold text-indigo-950 font-parkinsans">{type.label}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-sanctioned-load">
                What is your Sanctioned Load?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-sanctioned-subtitle">
                You can find this on your electricity bill (in kW)
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <input
                type="number"
                step="0.1"
                placeholder="Enter sanctioned load in kW (e.g., 3)"
                value={formData.sanctionedLoad}
                onChange={(e) => setFormData({ ...formData, sanctionedLoad: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 font-corbel"
                data-testid="input-sanctioned-load"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-monthly-bill">
                What is your average monthly electricity bill?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-bill-subtitle">
                Enter the amount you pay each month (in ₹)
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <input
                type="number"
                placeholder="Enter monthly bill amount (e.g., 5000)"
                value={formData.monthlyBill}
                onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 font-corbel"
                data-testid="input-monthly-bill"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-indigo-950 mb-2 font-parkinsans" data-testid="heading-location">
                Where is your property located?
              </h3>
              <p className="text-sm text-gray-600 font-corbel" data-testid="text-location-subtitle">
                This helps us calculate solar generation potential
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter your city or area"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 font-corbel"
                data-testid="input-location"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === 7 && calculationResult) {
    return (
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-4 font-parkinsans" data-testid="heading-results">
              Your Personalized Solar Savings Report
            </h2>
            <p className="text-gray-600 font-corbel" data-testid="text-results-subtitle">
              Based on your inputs, here's your complete solar solution
            </p>
          </div>

          {/* System Specifications */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border-2 border-indigo-900">
            <h3 className="text-xl font-semibold text-indigo-950 mb-6 font-parkinsans" data-testid="heading-system-specs">
              System Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 font-corbel">System Size</p>
                <p className="text-2xl font-bold text-indigo-950 font-parkinsans" data-testid="value-system-size">
                  {calculationResult.specifications.systemSizeKW.toFixed(2)} kW
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 font-corbel">Number of Panels</p>
                <p className="text-2xl font-bold text-indigo-950 font-parkinsans" data-testid="value-panel-count">
                  {calculationResult.specifications.panelCount}
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 font-corbel">Inverter Size</p>
                <p className="text-2xl font-bold text-indigo-950 font-parkinsans" data-testid="value-inverter-size">
                  {(calculationResult.specifications.inverterSize / 1000).toFixed(1)} kW
                </p>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border-2 border-indigo-900">
            <h3 className="text-xl font-semibold text-indigo-950 mb-6 font-parkinsans" data-testid="heading-cost-breakdown">
              Cost Breakdown
            </h3>
            
            {/* Detailed BOM Items */}
            <div className="mb-6 max-h-96 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="text-left p-2 font-corbel">Item</th>
                    <th className="text-right p-2 font-corbel">Qty</th>
                    <th className="text-right p-2 font-corbel">Rate</th>
                    <th className="text-right p-2 font-corbel">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {calculationResult.bomItems.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-corbel" data-testid={`bom-item-${index}`}>
                        {item.description}
                        {item.specification && (
                          <span className="text-xs text-gray-500 block">{item.specification}</span>
                        )}
                      </td>
                      <td className="text-right p-2 font-corbel">{item.quantity} {item.uom}</td>
                      <td className="text-right p-2 font-corbel">₹{item.rate.toLocaleString('en-IN')}</td>
                      <td className="text-right p-2 font-parkinsans font-semibold" data-testid={`bom-amount-${index}`}>
                        ₹{item.amount.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 pt-4 border-t-2">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600 font-corbel">Subtotal</span>
                <span className="text-lg font-semibold text-indigo-950 font-parkinsans">
                  ₹{calculationResult.costBreakdown.subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600 font-corbel">GST (18%)</span>
                <span className="text-lg font-semibold text-indigo-950 font-parkinsans" data-testid="value-gst">
                  ₹{calculationResult.costBreakdown.gst.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600 font-corbel">Total Project Cost</span>
                <span className="text-lg font-semibold text-indigo-950 font-parkinsans" data-testid="value-total-cost">
                  ₹{calculationResult.costBreakdown.total.toLocaleString('en-IN')}
                </span>
              </div>
              {calculationResult.subsidy.isEligible && (
                <div className="flex justify-between items-center py-3 border-b bg-green-50 px-4 rounded-lg">
                  <span className="text-green-700 font-semibold font-corbel">Government Subsidy (30%)</span>
                  <span className="text-lg font-semibold text-green-700 font-parkinsans" data-testid="value-subsidy">
                    -₹{calculationResult.subsidy.subsidyAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-indigo-50 px-4 rounded-lg">
                <span className="text-indigo-950 font-bold font-corbel">Your Net Investment</span>
                <span className="text-2xl font-bold text-indigo-950 font-parkinsans" data-testid="value-net-investment">
                  ₹{calculationResult.subsidy.netInvestment.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border-2 border-indigo-900">
            <h3 className="text-xl font-semibold text-indigo-950 mb-6 font-parkinsans" data-testid="heading-roi-summary">
              Return on Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 font-corbel">Payback Period</p>
                <p className="text-3xl font-bold text-green-700 font-parkinsans" data-testid="value-payback-period">
                  {calculationResult.paybackYears} years
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 font-corbel">25-Year Total Savings</p>
                <p className="text-3xl font-bold text-blue-700 font-parkinsans" data-testid="value-total-savings">
                  ₹{calculationResult.roiData[24].cumulativeSavings.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* ROI Chart */}
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={calculationResult.roiData.filter((_, i) => i % 2 === 0)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="cumulativeSavings" 
                    stroke="#059669" 
                    strokeWidth={2} 
                    name="Cumulative Savings"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="netCashflow" 
                    stroke="#2563EB" 
                    strokeWidth={2} 
                    name="Net Cashflow"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <button
              onClick={() => {
                setCurrentStep(1);
                setCalculationResult(null);
                setFormData({
                  buildingType: '',
                  numberOfFloors: '',
                  roofType: '',
                  sanctionedLoad: '',
                  monthlyBill: '',
                  location: ''
                });
              }}
              className="px-8 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors font-parkinsans"
              data-testid="button-start-over"
            >
              Start New Calculation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="personalised-savings-report" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-950 text-center mb-4 font-parkinsans" data-testid="heading-calculator">
            Personalized Solar Savings Report
          </h2>
          <p className="text-sm md:text-base font-normal leading-relaxed text-gray-600 text-center font-corbel" data-testid="text-calculator-subtitle">
            Follow these simple steps to get a detailed financial breakdown and see how much you can save.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    currentStep >= step
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                  data-testid={`progress-step-${step}`}
                >
                  {step}
                </div>
                {step < 6 && (
                  <div className={`h-1 w-8 md:w-16 ${currentStep > step ? 'bg-red-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Container */}
        <div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm min-h-96"
          style={{
            border: '2px solid #374499',
            backgroundColor: '#F9FAFB'
          }}
        >
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-2 font-parkinsans" data-testid="heading-step-number">
              STEP {currentStep} of 6
            </h3>
          </div>

          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors font-parkinsans"
                data-testid="button-back"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
            )}
            
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ml-auto font-parkinsans ${
                isStepValid()
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              data-testid="button-next"
            >
              {currentStep === 6 ? (
                <>
                  <Calculator className="w-5 h-5" />
                  Calculate
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
