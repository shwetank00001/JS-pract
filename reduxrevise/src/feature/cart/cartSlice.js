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
            // action.payload comes from the dispatch we used back there 
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


        // we can also do this as IMMER is working behind the scenes.
        increamAmt : function(state,action){
            const newAmt = state.cartItem.find( item => item.id === action.payload)
            newAmt.amount = newAmt.amount + 1
        },

        
        descreaseAmt : function(state,action){
            const newAmt = state.cartItem.find( item => item.id === action.payload)
            newAmt.amount = newAmt.amount - 1
        },


        totalAmt : function(state, action){
            let amount = 0;
            let total = 0;
            state.cartItem.forEach((item) => {
                amount = amount + item.amount
                total = total + item.amount * item.price
            })
            state.amount = amount
            state.total = total

        }

    }
})

console.log(cartSlice)

export const {clearCart, removeItem, increamAmt, descreaseAmt, totalAmt} = cartSlice.actions

export default cartSlice.reducer