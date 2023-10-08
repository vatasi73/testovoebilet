import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SearchSlice = {
  from: string;
  to: string;
  there: string;
  departureTime: string;
  arrivalTime: string;
  back: string | null;
};

const initialState: SearchSlice = {
  from: "erwerwerw",
  to: "ewrwerwerwer",
  there: "",
  departureTime: "09.20",
  arrivalTime: "11.05",
  back: "",
};

const searchSlice = createSlice({
  name: "@@search",
  initialState,
  reducers: {
    setSearchFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },
    setSearchTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    setSearchThere: (state, action: PayloadAction<string>) => {
      state.there = action.payload;
    },
    setSearchBack: (state, action: PayloadAction<string | null>) => {
      state.back = action.payload;
    },
    setDepartureTime: (state, action: PayloadAction<string>) => {
      state.departureTime = action.payload;
    },
    setArrivalTime: (state, action: PayloadAction<string>) => {
      state.arrivalTime = action.payload;
    },
  },
});

export const selectFrom = (state: RootState) => state.search.from;
export const selectTo = (state: RootState) => state.search.to;
export const selectThere = (state: RootState) => state.search.there;
export const selectBack = (state: RootState) => state.search.back;
export const selectDepartureTime = (state: RootState) =>
  state.search.departureTime;
export const selectArrivalTime = (state: RootState) => state.search.arrivalTime;

export const {
  setSearchFrom,
  setSearchTo,
  setSearchThere,
  setSearchBack,
  setDepartureTime,
  setArrivalTime,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
