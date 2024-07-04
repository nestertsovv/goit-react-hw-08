import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectFilter: (state) => state.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { selectFilter } = slice.selectors;
export const { changeFilter } = slice.actions;
