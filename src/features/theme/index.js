import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    current: "dark",
  },
  reducers: {
    setTheme(state, { payload }) {
      state.current = payload;
    },
  },
});
const { actions, reducer } = themeReducer;
export const { setTheme } = actions;
export default reducer;
