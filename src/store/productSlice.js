import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.status = "idle";
    },
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default productSlice.reducer;
