import { createSlice } from "@reduxjs/toolkit";

const languageReducer = createSlice({
  name: "language",
  initialState: {
    current: "en",
  },
  reducers: {
    setLanguageGlobal(state, { payload }) {
      state.current = payload;
    },
  },
});
const { actions, reducer } = languageReducer;
export const { setLanguageGlobal } = actions;
export default reducer;
