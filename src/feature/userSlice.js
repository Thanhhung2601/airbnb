import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoging: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.isLoging = true
        },
        logout: (state, action) => {
            state.user = null
            state.isLoging = false
        },
    },
})
