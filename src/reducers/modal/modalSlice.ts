import { createSlice } from '@reduxjs/toolkit';

export interface IModal {
  isVisible: boolean;
}

const initialState: IModal = {
  isVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isVisible = true;
    },
    closeModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
