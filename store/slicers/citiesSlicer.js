import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const citiesSlicer = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    getCities: (state, action) => {
      return action.payload;
    },
  },
});

export const {getCities} = citiesSlicer.actions;
export default citiesSlicer.reducer;
