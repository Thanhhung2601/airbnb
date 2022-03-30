import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../feature/userSlice'
import { searchSlice } from '../feature/searchSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'Userinfo',
    storage,
    whitelist: ['user', 'search'],
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    search: searchSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
})

export default store
export const persistor = persistStore(store)
