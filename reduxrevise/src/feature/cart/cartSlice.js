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
                amount: 1,
                total:0,
                isLoading: true
            }
            // state.cartItem = state.cartItem.filter(function(item){
            //     return item.id !== action.payload
            // })
        },
        increamAmt : function(state,action){
            state.amount = state.amount +1
        },
        descreaseAmt : function(state,action){
            state.amount = state.amount - 1
        },
        totalAmt : function(state, action){
            state.total = state.total  + state.cartItem.price
        }

    }
})

console.log(cartSlice)

export const {clearCart, removeItem, increamAmt, descreaseAmt, totalAmt} = cartSlice.actions

export default cartSlice.reducer