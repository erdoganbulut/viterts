import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counter.slice';
import userReducer from './slices/user.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
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
