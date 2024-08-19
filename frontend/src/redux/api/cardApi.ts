import { baseApi } from "./baseApi";

export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlat: build.mutation({
      query: (cardData) => ({
        url: `/cards`,
        method: "POST",
        data: cardData,
      }),
      invalidatesTags: ["Card"],
    }),
    getAllFlats: build.query({
      query: (arg: Record<string, unknown>) => ({
        url: `/cards`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["Card"],
    }),

    getFlatById: build.query({
      query: (title: string) => ({
        url: `/cards/${title}`,
        method: "GET",
      }),
      providesTags: ["Card"],
    }),
  }),
});

export const {
  useCreateFlatMutation,
  useGetAllFlatsQuery,

  useGetFlatByIdQuery,
} = cardApi;
