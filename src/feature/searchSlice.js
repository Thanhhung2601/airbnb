import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        location: null,
        startDate: null,
        endDate: null,
        NumberofGuests: 1,
    },
    reducers: {
        search: (state, action) => {
            state.location = action.payload.location
            state.startDate = action.payload.startDateformat
            state.endDate = action.payload.endDateformat
            state.NumberofGuests = action.payload.NumberofGuests
        },
    },
})
