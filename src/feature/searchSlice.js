import { createSlice } from '@reduxjs/toolkit'
import { searchResult } from '../data/searchResult'

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        location: null,
        startDate: null,
        endDate: null,
        NumberofGuests: 1,
        result: [...searchResult],
    },
    reducers: {
        search: (state, action) => {
            state.location = action.payload.location
            state.startDate = action.payload.startDateformat
            state.endDate = action.payload.endDateformat
            state.NumberofGuests = action.payload.NumberofGuests
        },
        likeWish: (state, action) => {
            state.result.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.liked = true
                }
            })
        },
        unLikeWish: (state, action) => {
            state.result.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.liked = false
                }
            })
        },
    },
})
