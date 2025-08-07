import { configureStore } from "@reduxjs/toolkit";
import proteinSlice from "./feature/proteinSlice/proteinSlice";

export const store = configureStore({
  reducer: {
    protein: proteinSlice,
  },
});
