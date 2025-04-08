import { configureStore } from "@reduxjs/toolkit";
import blogCategoryReducer from './blogCategorySelected/slice'
import idPostReducer from './idPost/slice'

const store = configureStore({
    reducer:{
        Category: blogCategoryReducer,
        IdNumber: idPostReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store