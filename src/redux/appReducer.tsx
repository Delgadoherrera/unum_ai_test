import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  globalMenuOpt: string;
}

const initialState: DataState = {
  globalMenuOpt: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setGlobalMenuOpt: (state, action: PayloadAction<string>) => {
      console.log("payload:", action.payload);
      state.globalMenuOpt = action.payload;
    },
  },
});

export const { setGlobalMenuOpt } = dataSlice.actions;

export default dataSlice.reducer;
