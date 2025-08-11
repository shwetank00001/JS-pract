import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proteinCount: 0,
  foodConsumed: [],
};

const proteinSlice = createSlice({
  name: 'protein',
  initialState,
  reducers : {
    
  }
});

export default proteinSlice.reducer
