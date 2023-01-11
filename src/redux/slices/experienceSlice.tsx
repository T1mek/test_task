import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export type IExperience = {
  id: number;
  title: string;
  stack: string;
};
export interface IData {
  data: IExperience[];
  status: "loading" | "successful" | "error";
}

export const getExperience = createAsyncThunk<IData>(
  "experience/getExperience",
  async () => {
    const res = await axios.get<IData>("experience.json");
    return res.data;
  }
);

const initialState: IData = {
  data: [],
  status: "loading",
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExperience.pending, (state, action) => {
      state.data = [];
      state.status = "loading";
    });
    builder.addCase(getExperience.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = "successful";
    });
    builder.addCase(getExperience.rejected, (state, action) => {
      state.data = [];
      state.status = "error";
    });
  },
});

export default experienceSlice.reducer;
