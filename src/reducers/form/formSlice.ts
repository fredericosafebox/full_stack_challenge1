/* eslint-disable import/no-unresolved */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IErrors } from '../../interfaces/IErrors';
import IDay from '../../interfaces/IDay';

export interface FormState {
  amount?: number;
  installments?: number;
  mdr?: number;
  days?: IDay[];
  daysString?: string;
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
  days: [],
  daysString: '',
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
    updateDays: (state: FormState, action: PayloadAction<IDay[]>) => {
      state.days = action.payload;
    },
    setDayString: (state: FormState, action: PayloadAction<string>) => {
      state.daysString = action.payload;
    },
    resetErrors: (state: FormState) => {
      state.errors = { amount: [], installments: [], mdr: [] };
    },
    resetState: (state: FormState) => {
      (state.amount = 1000), (state.installments = 1);
      state.mdr = 0;
      state.days = [];
      state.tomorrow = 0;
      state.twoWeeks = 0;
      state.oneMonth = 0;
      state.threeMonths = 0;
      state.errors = { amount: [], installments: [], mdr: [] };
      state.daysString = '';
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
  resetState,
  updateDays,
  setDayString,
} = formSlice.actions;

export default formSlice.reducer;
