import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateValues, calculatePayment } from "../features/CalculateSlice";

const MortgageCalculator = () => {
  const dispatch = useDispatch();
  const {
    homePrice,
    downPayment,
    interestRate,
    taxes,
    zipCode,
    monthlyPayment,
    monthlyPrincipalAndInterest,
    monthlyTaxes,
  } = useSelector((state) => state.calculator || {});

  const handleInputChange = (field, value) => {
    dispatch(updateValues({ [field]: value }));
  };

  const handleCalculate = () => {
    dispatch(calculatePayment());
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-auto p-4">
      <div className="bg-white p-8 mt-24 rounded-2xl shadow-xl w-full max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
          Mortgage Calculator
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mt-12">
          <div>
            <label className="block text-sm font-medium text-gray-600">Home Price ($)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => handleInputChange("homePrice", Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="300000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Down Payment ($)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => handleInputChange("downPayment", Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="60000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => handleInputChange("interestRate", Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="7.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Property Taxes ($)</label>
            <input
              type="number"
              value={taxes}
              onChange={(e) => handleInputChange("taxes", Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="5000"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-600">Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="302002"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          Calculate Payment
        </button>

        {monthlyPayment > 0 && (
          <div className="mt-6 bg-green-100 border border-green-300 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-medium text-green-800 text-center">
              Estimated Monthly Payment
            </h3>
            <p className="text-2xl font-bold text-green-900 text-center">${monthlyPayment}</p>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Principal & Interest:</span>
                <span>${monthlyPrincipalAndInterest}</span>
              </div>
              <div className="flex justify-between">
                <span>Property Taxes:</span>
                <span>${monthlyTaxes}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
