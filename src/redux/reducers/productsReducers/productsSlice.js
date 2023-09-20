import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: null,
  isActive: false,
  products: [],
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRatingNFilter: (state, action) => {
      state.rating = action.payload.rate;
      state.isActive = true;
      if (action.payload.rating === null) {
        state.isActive = false;
      }
      if (action.payload.rating) {
        action.payload.products = action.payload.products.filter(
          (product) => product.rating === action.payload.rating
        );
        action.payload.setProducts(action.payload.products);
      }
    },
  },
});

export const { setRatingNFilter } = ratingSlice.actions;

export default ratingSlice.reducer;
