import { createSlice } from '@reduxjs/toolkit';
const lang = localStorage.getItem('language');

const languageReducer = createSlice({
  name: 'language',
  initialState: {
    current: lang ? lang : 'en',
  },
  reducers: {
    setLanguageGlobal(state, { payload }) {
      state.current = payload;
      localStorage.setItem('language', payload);
    },
  },
});
const { actions, reducer } = languageReducer;
export const { setLanguageGlobal } = actions;
export default reducer;
