import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://62d4029ccd960e45d4519519.mockapi.io/api/v1' }),
        tagTypes: ['Contacts'],
    endpoints: builder => ({
      fetchContacts: builder.query({
        query: () => `/contacts`,
        providesTags: ['Contacts'],
      }),
      deleteContact: builder.mutation({
        query: contactId => ({
            url: `/contacts/${contactId}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],
      }),
      createContact: builder.mutation({
        query: ({name, number}) => ({
            url: 'contacts',
            method: 'POST',
            body: {
                name: name,
                number: number,
            }, 
        }),
        invalidatesTags: ['Contacts'],
      }),
    }),
  });
  
  export const { 
    useFetchContactsQuery, 
    useDeleteContactMutation, 
    useCreateContactMutation } = contactsApi;