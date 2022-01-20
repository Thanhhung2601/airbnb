import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoging: false,
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
