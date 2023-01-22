import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./music/musicSlice";
export const store = configureStore({
  reducer: musicSlice,
});
