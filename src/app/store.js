import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import assetReducer from "../features/asset/assetSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    asset: assetReducer,
  },
});