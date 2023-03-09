import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const customerDataSlicer = createSlice({
  name: 'customerDatas',
  initialState,
  reducers: {
    addCustomerDatas: (state, action) => {
      return action.payload;
    },
  },
});

export const {addCustomerDatas} = customerDataSlicer.actions;
export default customerDataSlicer.reducer;
