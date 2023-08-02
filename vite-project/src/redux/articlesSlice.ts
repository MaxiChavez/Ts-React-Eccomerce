import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
    name: "detail",
    initialState: {
      articles: [],
    },
    reducers: {
      addArticles: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    },
});

//exporto las ACCIONES.....
export const { addArticles } = articlesSlice.actions;

export const articleData = (state: any) => state.detail;

export default articlesSlice.reducer;