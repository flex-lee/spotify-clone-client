import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    searchResult: [],
  },
  reducers: {
    searchResultAction(state, { payload }) {
      state.searchResult = payload;
    },
    setSearchValueAction(state, { payload }) {
      state.searchValue = payload;
    },
  },
});

export const { searchResultAction, setSearchValueAction } = searchSlice.actions;
export default searchSlice.reducer;
