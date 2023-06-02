import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessTokenAction(state, { payload }) {
      state.accessToken = payload;
    },
  },
});

export const { setAccessTokenAction } = userSlice.actions;
export default userSlice.reducer;
