import { configureStore } from "@reduxjs/toolkit";
import experience from "./slices/experienceSlice";
import filterSlice from "./slices/filterSlice";
import blogsSlice from "./slices/blogsSlice";

const store = configureStore({
  reducer: { experience, filterSlice, blogsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
