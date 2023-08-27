import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
export const getproducts = createAsyncThunk(
  "menu/items",
  async (name, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:8000/prod");
      initialState.push(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "menu",
  initialState,
  reducer: {
    getspecific: (state, action) => {
      (e) => {
        const itemId = action.payload;
        const value = e.target.value;
        state.products = state.products.filter(
          (prod) => prod.category === value
        );
      };
    },
  },
});

export default cartSlice.reducer;
