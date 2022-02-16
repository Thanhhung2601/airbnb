import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../feature/userSlice'
import { searchSlice } from '../feature/searchSlice'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        search: searchSlice.reducer,
    },
})

export default store
