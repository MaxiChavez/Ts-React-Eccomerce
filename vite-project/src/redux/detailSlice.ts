import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: "detail",
    initialState: {
      article:{},
    },
    reducers: {
      addDetail: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    },
});

//exporto las ACCIONES.....
export const { addDetail } = detailSlice.actions;

export const detailData = (state: any) => state.detail;

export default detailSlice.reducer;