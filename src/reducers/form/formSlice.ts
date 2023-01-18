import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  amount?: number;
  installments?: number;
  mdr?: number;
  tomorrow: number;
  twoWeeks: number;
  oneMonth: number;
  threeMonths: number;
}

const initialState: FormState = {
  amount: 0,
  installments: 0,
  mdr: 0,
  tomorrow: 0,
  twoWeeks: 0,
  oneMonth: 0,
  threeMonths: 0,
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
  },
});

export const { updateAmount, updateInstallments, updateMdr, updateResult } =
  formSlice.actions;

export default formSlice.reducer;
