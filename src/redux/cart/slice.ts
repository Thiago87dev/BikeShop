import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BikeSliceProps {
  image: string;
  title: string;
  price: number;
  quantity?: number;
}

interface CartState {
  bikes: BikeSliceProps[];
}

const initialState: CartState = {
  bikes: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<BikeSliceProps>) => {
      const bikeAlredyInCart = state.bikes.some(
        (bike) => bike.title === action.payload.title
      );
      if (bikeAlredyInCart) {
        state.bikes = state.bikes.map((bike) =>
          bike.title === action.payload.title
            ? { ...bike, quantity: bike.quantity! + action.payload.quantity! }
            : bike
        );
      } else {
        if (action.payload.quantity !== 0) {
          state.bikes.push({
            ...action.payload,
            quantity: action.payload.quantity || 1,
          });
        }
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ title: string; quantity: number }>
    ) => {
      state.bikes = state.bikes.map((bike) => {
        if (bike.title === action.payload.title) {
          return { ...bike, quantity: action.payload.quantity };
        }
        return bike;
      });
    },
    removeBike: (state, action: PayloadAction<string>) => {
      state.bikes = state.bikes.filter((bike) => bike.title !== action.payload);
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      state.bikes = state.bikes.map((bike) =>
        bike.title === action.payload
          ? { ...bike, quantity: bike.quantity! - 1 }
          : bike
      ).filter((bike) => bike.quantity! > 0)
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      state.bikes = state.bikes.map((bike) =>
        bike.title === action.payload
          ? { ...bike, quantity: bike.quantity! + 1 }
          : bike
      ).filter((bike) => bike.quantity! > 0)
    },
  },
});

export const { addProductToCart, updateQuantity, removeBike, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
