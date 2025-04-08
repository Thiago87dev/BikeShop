import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IdState {
    numberId: number
}

const initialState: IdState = {
    numberId: 0
}

const idPostSlice = createSlice({
    name:"idPost",
    initialState,
    reducers: {
        setIdPost:(state,action: PayloadAction<number>) =>{
            state.numberId = action.payload
        }
    }
})

export const {setIdPost} = idPostSlice.actions
export default idPostSlice.reducer