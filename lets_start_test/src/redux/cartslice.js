import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cartItem:[]
    },
    reducers:{
        addItem: (state, action) => {
            state.cartItem.push(action.payload)
        },
        removeItem: (state) => {
            state.cartItem.pop()
        },
        clearItem: (state) => {
            state.cartItem = []
        }
    }
})

export  const { addItem, removeItem, clearItem }= cartSlice.actions

export default cartSlice.reducer