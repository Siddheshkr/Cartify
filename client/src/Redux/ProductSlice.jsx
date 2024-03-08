import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSearchQuery } = productSlice.actions;

export const getProducts = createAsyncThunk(
  "products/get",
  async ({ page, searchQuery }) => {
    const data = await fetch(
      `https://fakestoreapi.com/products?limit=20&page=${page}&title=${searchQuery}`
    );
    const result = await data.json();
    return result;
  }
);
export default productSlice.reducer;
