import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoging: false,
        user: null,
        wishLists: [],
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
        createNewWishLists: (state, action) => {
            console.log(action.payload)
            state.wishLists.push(action.payload)
        },
        addSubWishLists: (state, action) => {
            console.log('payload', action.payload)
            state.wishLists.forEach((it) => {
                if (it.id === action.payload.item.id) {
                    it.subWishLists.push(action.payload.newWish)
                }
            })
        },
        deleteSubWishItem: (state, action) => {
            const newArr = [...state.wishLists]
            newArr.forEach((item) => {
                item.subWishLists.forEach((it) => {
                    if (it.id === action.payload.data.id) {
                        const resultFilter = item.subWishLists.filter(
                            (subWish) => subWish.id !== action.payload.data.id
                        )
                        item.subWishLists = resultFilter
                    }
                })
            })
            state.wishLists = newArr
        },
        updateNameWishList: (state, action) => {
            state.wishLists.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.nameWishLists = action.payload.newName
                }
            })
        },
        deleteWishList: (state, action) => {
            const newArr = [...state.wishLists]
            state.wishLists = newArr.filter(
                (item) => item.id !== action.payload.id
            )
        },
    },
})
