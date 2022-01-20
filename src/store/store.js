import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../feature/userSlice'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})

export default store