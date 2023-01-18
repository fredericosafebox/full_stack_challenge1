/* eslint-disable import/no-unresolved */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit';
import formReducer from '../reducers/form/formSlice';
import counterReducer from '../reducers/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
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
