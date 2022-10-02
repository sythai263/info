import { createSlice } from '@reduxjs/toolkit';
const theme = localStorage.getItem('theme');

const themeReducer = createSlice({
  name: 'theme',
  initialState: {
    current: theme ? theme : 'dark',
  },
  reducers: {
    setTheme(state, { payload }) {
      state.current = payload;
      localStorage.setItem('theme', payload);
    },
  },
});
const { actions, reducer } = themeReducer;
export const { setTheme } = actions;
export default reducer;
