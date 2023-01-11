import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExperience } from "./experienceSlice";

const initialState: IExperience = {
  id: 0,
  title: "",
  stack: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = filterSlice.actions;
export default filterSlice.reducer;
