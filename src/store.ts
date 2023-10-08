import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { searchReducer } from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {},
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
