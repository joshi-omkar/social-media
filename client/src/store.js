import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { feedReducer } from "./features/Feed/FeedSlice";
import userReducer from "./features/User/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    user: userReducer,
  },
});
