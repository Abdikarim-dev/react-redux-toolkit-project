import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";
// import axios from "axios";
// import { toggleModal } from "../modal/modalSlice";

// const url = "https://www.course-api.com/react-useReducer-cart-project";

// export const getCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (_, thunkAPI) => {
//     try {
//       const resp = await axios(url);
//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("SOMETHING WENT WRONG");
//     }
//   }
// );

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      const unitPrice = cartItem.unitPrice;
      cartItem.amount = cartItem.amount + 1;
      cartItem.price = unitPrice * cartItem.amount;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      const unitPrice = cartItem.unitPrice;
      cartItem.amount = cartItem.amount - 1;
      cartItem.price = unitPrice * cartItem.amount;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.unitPrice;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  //   extraReducers: {
  //     [getCartItems.pending]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [getCartItems.fulfilled]: (state, action) => {
  //       state.cartItems = action.payload;
  //       state.isLoading = false;
  //     },
  //     [getCartItems.rejected]: (state,action) => {
  //         console.log(action)
  //       state.isLoading = false;
  //     },
  //   },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCartItems.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getCartItems.fulfilled, (state, action) => {
  //       state.cartItems = action.payload;
  //       // state.amount = action.payload.length;
  //       state.isLoading = false;
  //     })
  //     .addCase(getCartItems.rejected, (state) => {
  //       state.isLoading = false;
  //     });
  // },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
