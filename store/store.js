import {configureStore} from '@reduxjs/toolkit';
import APIservice from './services/APIservice';
import citiesSlicer from './slicers/citiesSlicer';
import customerDataSlicer from './slicers/customerDataSlicer';

const store = configureStore({
  reducer: {
    [APIservice.reducerPath]: APIservice.reducer,
    cities: citiesSlicer,
    customerDatas: customerDataSlicer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(APIservice.middleware),
});

export default store;
