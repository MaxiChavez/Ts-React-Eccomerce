import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
      categorySelected: 0,
    },
    reducers: {
      setCategory: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    },
});

//exporto las ACCIONES.....
export const { setCategory } = categorySlice.actions;

export const categoryData = (state: any) => state.category.categorySelected;

export default categorySlice.reducer;