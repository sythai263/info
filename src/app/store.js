import { configureStore } from "@reduxjs/toolkit";
import language from "../features/language";
import theme from "../features/theme";

export const store = configureStore({
  reducer: {
    language,
    theme,
  },
});
