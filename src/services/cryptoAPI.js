import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoApiheaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '60dc35c5ffmsh035a7ae9c8d9d04p177b8ejsn0cfcc8853303'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({
    url: url, headers: cryptoApiheaders,
    options: {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/v2/${url}`,
    }
})

const createCoinDetailRequest = (url)=>{
    return {
        url: url, headers: cryptoApiheaders,
        options : {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/${url}`,
            params: {referenceCurrencyUuid: url, timePeriod: '24h'},
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '60dc35c5ffmsh035a7ae9c8d9d04p177b8ejsn0cfcc8853303'
            }
        }
    }
}

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),

        getCryptoDetails: builder.query({
            query: (coinId)=>createCoinDetailRequest(`coin/${coinId}`),
        })
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;