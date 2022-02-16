import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoging: true,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
        },
        logout: (state, action) => {
            state.user = null
        },
    },
})
