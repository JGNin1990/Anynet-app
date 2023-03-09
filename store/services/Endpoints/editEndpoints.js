import APIservice from '../APIservice';

const editEndpoints = APIservice.injectEndpoints({
  endpoints: builder => ({
    internetPlan: builder.query({
      query: () => 'get_internet_plan',
      overrideExisting: true,
    }),
    cities: builder.query({
      query: () => 'get_city',
      overrideExisting: true,
    }),
    township: builder.query({
      query: no => `get_townshipByCity/${no}`,
      // overrideExisting: true,
    }),
    severFee: builder.query({
      overrideExisting: true,
      query: () => 'get_service_fee',
    }),
    saleRep: builder.query({
      query: () => 'get_sale_rep',
    }),
    paymentMethod: builder.query({
      query: () => 'all_paymentmethod',
    }),
  }),
});

export const {
  useInternetPlanQuery,
  useCitiesQuery,
  useTownshipQuery,
  useSeverFeeQuery,
  useSaleRepQuery,
  usePaymentMethodQuery,
} = editEndpoints;
