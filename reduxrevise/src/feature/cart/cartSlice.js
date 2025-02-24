import {createSlice} from "@reduxjs/toolkit"
import {cartList} from '../../cartItems'

const initialState = {
    cartItem: cartList,
    amount: 10,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: function(state){
            // state.cartItem = []
            return {
                cartItem: [],
                amount: 0,
                total:0,
                isLoading: true
            }
        },
        removeItem: function(state, action){
            //How i do in reducer i set a new value and then put that new value with the old value of the initial statw
            const newValue = state.cartItem.filter(function(item){
                return item.id!== action.payload
            })
            console.log(action.payload)
            return {
                cartItem: newValue,
                amount: 0,
                total:0,
                isLoading: true
            }
            // state.cartItem = state.cartItem.filter(function(item){
            //     return item.id !== action.payload
                

            // })
            
        }
    }
})

console.log(cartSlice)

export const {clearCart, removeItem} = cartSlice.actions

export default cartSlice.reducer