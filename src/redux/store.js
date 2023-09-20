import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // filter: filterSlice,
  },
});

export default store;
