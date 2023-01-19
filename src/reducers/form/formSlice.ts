/* eslint-disable import/no-unresolved */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IErrors } from '../../interfaces/IErrors';

export interface FormState {
  amount?: number;
  installments?: number;
  mdr?: number;
  tomorrow: number;
  twoWeeks: number;
  oneMonth: number;
  threeMonths: number;
  errors?: {
    [amount: string]: IErrors[];
    installments: IErrors[];
    mdr: IErrors[];
  };
}

const initialState: FormState = {
  amount: 1000,
  installments: 1,
  mdr: 0,
  tomorrow: 0,
  twoWeeks: 0,
  oneMonth: 0,
  threeMonths: 0,
  errors: {
    amount: [],
    installments: [],
    mdr: [],
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    updateInstallments: (state, action: PayloadAction<number>) => {
      state.installments = action.payload;
    },
    updateMdr: (state, action: PayloadAction<number>) => {
      state.mdr = action.payload;
    },
    updateResult: (state, action: PayloadAction<FormState>) => {
      state.tomorrow = action.payload.tomorrow;
      state.twoWeeks = action.payload.twoWeeks;
      state.oneMonth = action.payload.oneMonth;
      state.threeMonths = action.payload.threeMonths;
    },
    updateErrors: (state: FormState, action: PayloadAction<any>) => {
      const { type: key } = action.payload;
      state.errors![key] = [action.payload];
    },
    resetErrors: (state: FormState) => {
      state.errors = { amount: [], installments: [], mdr: [] };
    },
  },
});

export const {
  updateAmount,
  updateInstallments,
  updateMdr,
  updateResult,
  updateErrors,
  resetErrors,
} = formSlice.actions;

export default formSlice.reducer;
