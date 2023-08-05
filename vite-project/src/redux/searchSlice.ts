import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
      search: [],
    },
    reducers: {
      addSearch: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    },
});

//exporto las ACCIONES.....
export const { addSearch } = searchSlice.actions;

export const searchData = (state: any) => state.search;

export default searchSlice.reducer;