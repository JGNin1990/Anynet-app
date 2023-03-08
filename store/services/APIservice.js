import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const APIservice = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://staging.aggademo.me/anynet/public/api/',
    credentials: 'same-origin',
    prepareHeaders: header => {
      header.set('Access-Control-Allow-Origin', '*');
      header.set('Accept', 'application/json');
      header.set('Content-Type', 'application/json');
      return header;
    },
  }),
  endpoints: builder => ({}),
});

export default APIservice;
