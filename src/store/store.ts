/* eslint-disable import/no-unresolved */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit';
import form from '../reducers/form/formSlice';
import modal from '../reducers/modal/modalSlice';

export const store = configureStore({
  reducer: {
    form,
    modal,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
