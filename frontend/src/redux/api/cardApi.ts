import { baseApi } from "./baseApi";

export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCard: build.mutation({
      query: (cardData) => ({
        url: `/cards`,
        method: "POST",
        data: cardData,
      }),
      invalidatesTags: ["Card"],
    }),
    getAllCard: build.query({
      query: (arg: Record<string, unknown>) => ({
        url: `/cards`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["Card"],
    }),

    getCardBytitle: build.query({
      query: (title: string) => ({
        url: `/cards/${title}`,
        method: "GET",
      }),
      providesTags: ["Card"],
    }),
  }),
});

export const {
  useCreateCardMutation,
  useGetAllCardQuery,
  useGetCardBytitleQuery,
} = cardApi;
