import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedCategory: string;
}

const initialState: CategoryState = {
  selectedCategory: "all",
};

const blogCategorySelectedSlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {
    setBlogCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setBlogCategory} = blogCategorySelectedSlice.actions
export default blogCategorySelectedSlice.reducer
