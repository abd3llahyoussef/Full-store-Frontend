import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  store: [],
  purchasedProducts: [],
  user: "",
  count: 0,
  isLoading: false,
  error: null,
};

initialState.purchasedProducts.push(initialState.prevPurchasedProducts);

export const getProducts = createAsyncThunk("store/getProducts", async () => {
  const res = await axios.get("http://localhost:8000/prod");
  return res.data;
});

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = 0;
    },
    addOne: (state) => {
      state.count += 1;
    },
    minusOne: (state) => {
      state.count -= 1;
    },
    setProduct: (state, action) => {
      state.purchasedProducts = action.payload;
    },
    setName: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.store = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.error?.message;
    },
  },
});

export const { addOne, minusOne, setProduct, setCount, setName } =
  storeSlice.actions;
export default storeSlice.reducer;
