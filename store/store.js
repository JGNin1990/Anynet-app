import {configureStore} from '@reduxjs/toolkit';
import APIservice from './services/APIservice';
import citiesSlicer from './slicers/citiesSlicer';

const store = configureStore({
  reducer: {
    [APIservice.reducerPath]: APIservice.reducer,
    cities: citiesSlicer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(APIservice.middleware),
});

export default store;
