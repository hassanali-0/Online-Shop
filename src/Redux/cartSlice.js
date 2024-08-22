import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items : [],
    totalPrice : 0,
    subTotal : 0
}

const cartSlice = createSlice(
    {
        name : 'cart',
        initialState,
        reducers : {
            addItemsToCart : (state, action) => {
                const newItem = action.payload
                const existingItem = state.items.find(item => item.id === newItem.id)
                if (existingItem) {
                    existingItem.quantity += 1
                    existingItem.totalPrice = existingItem.price * existingItem.quantity
                }
                else {
                    state.items.push(
                        {
                            ...newItem,
                            quantity : 1,
                            totalPrice: newItem.price,
                        }
                    )
                }
                state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0)
                state.subTotal = state.items.reduce((total, item) => total + item.totalPrice, 0)
            },
            quantityIncrement : (state, action) => {
                const item = state.items.find(item => item.id === action.payload.id)
                if (item) {
                    item.quantity += 1
                    item.totalPrice = item.price * item.quantity;
                }
                state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0)
                state.subTotal = state.items.reduce((total, item) => total + item.totalPrice, 0)
            },
            quantityDecrement : (state, action) => {
                const item = state.items.find(item => item.id === action.payload.id)
                if (item && item.quantity > 1) {
                    item.quantity -= 1
                    item.totalPrice = item.price * item.quantity;
                }
                state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0)
                state.subTotal = state.items.reduce((total, item) => total + item.totalPrice, 0)
            },
            clearCart : (state) => {
                state.items = []

            }
        }
    }
)

export const { addItemsToCart, quantityIncrement, quantityDecrement, clearCart } = cartSlice.actions
export default cartSlice.reducer