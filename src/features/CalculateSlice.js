import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homePrice: 0,
  downPayment: 0,
  interestRate: 0,
  taxes: 0,
  zipCode: "",
  monthlyPayment: 0,
  monthlyPrincipalAndInterest: 0,
  monthlyTaxes: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateValues: (state, action) => {
      return { ...state, ...action.payload };
    },
    calculatePayment: (state) => {
      const principal = state.homePrice - state.downPayment;
      const monthlyInterest = (state.interestRate / 100) / 12;
      const numberOfPayments = 30 * 12;

      const monthlyPrincipalAndInterest =
        (principal *
          monthlyInterest *
          Math.pow(1 + monthlyInterest, numberOfPayments)) /
        (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

      const monthlyTaxes = state.taxes / 12;
      const totalPayment = monthlyPrincipalAndInterest + monthlyTaxes;

      state.monthlyPrincipalAndInterest = monthlyPrincipalAndInterest.toFixed(2);
      state.monthlyTaxes = monthlyTaxes.toFixed(2);
      state.monthlyPayment = totalPayment.toFixed(2);
    },
  },
});

export const { updateValues, calculatePayment } = calculatorSlice.actions;
export default calculatorSlice.reducer;
