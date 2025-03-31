import { configureStore } from "@reduxjs/toolkit";
import blogCategoryReducer from './blogCategorySelected/slice'

const store = configureStore({
    reducer:{
        Category: blogCategoryReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store