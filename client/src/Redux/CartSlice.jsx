import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  Items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.Items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.Items[itemIndex].cartQuantity += 1;
        toast(`Item's Qnty increased in cart!`, {
          position: "top-center",
          icon: "➕",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.Items.push(tempProduct);
        toast.success(`Item added in the cart`, {
          position: "top-center",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.Items));
    },
    removeFromCart(state, action) {
      const newCartItems = state.Items.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.Items = newCartItems;
      toast.error(`Item removed from cart`, {
        position: "top-center",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.Items));
    },
    decreaseCart(state, action) {
      const itemIndex = state.Items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.Items[itemIndex].cartQuantity > 1) {
        state.Items[itemIndex].cartQuantity -= 1;

        toast(`Item's Qnty decreased in cart!`, {
          position: "top-center",
          icon: "➖",
        });
      } else if (state.Items[itemIndex].cartQuantity === 1) {
        const newCartItems = state.Items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.Items = newCartItems;

        toast.error(`Item removed from cart`, {
          position: "top-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.Items));
    },
    clearCart(state, action) {
      state.Items = [];
      toast("Cart Cleared", {
        position: "top-center",
        icon: "🛒",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.Items));
    },
    getTotal(state, action) {
      let { total, quantity } = state.Items.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
