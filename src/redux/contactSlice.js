import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myContactSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, api) => {
      const token = api.getState().token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts', 'User'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: values => ({
        url: 'users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: values => ({
        url: 'users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: values => ({
        url: 'users/logout',
        method: 'POST',
        body: values,
      }),
    }),
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} = myContactSlice;

//
//
//
// export const myContactSlice = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63661f0e79b0914b75c9ab6f.mockapi.io/api/v1',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),
//     getContactById: builder.query({
//       query: id => `/contacts/${id}`,
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: values => ({
//         url: '/contacts',
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     updateContact: builder.mutation({
//       query: fields => ({
//         url: `/contacts/${fields.id}`,
//         method: 'PUT',
//         body: fields,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
//   useGetContactByIdQuery,
//   useUpdateContactMutation,
// } = myContactSlice;
