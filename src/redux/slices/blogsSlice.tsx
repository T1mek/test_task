import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IText {
  posts: IBlogs[];
  status: "loading" | "successful" | "error";
}
export type IBlogs = {
  title: string;
  photo: string;
  time: string;
  text: string;
};

export const getBlogs = createAsyncThunk<IText>("blogs/getBlogs", async () => {
  const res = await axios.get<IText>("blogs.json");
  return res.data;
});

const initialState: IText = {
  posts: [],
  status: "loading",
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state, action) => {
      state.posts = [];
      state.status = "loading";
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
      state.status = "successful";
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.posts = [];
      state.status = "error";
    });
  },
});

export default blogsSlice.reducer;
