// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/CalculateSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
