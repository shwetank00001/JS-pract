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
        clearCart: function(globalState){
            // globalState.cartItem = []
            return {
                cartItem: [],
                amount: 0,
                total:0,
                isLoading: true
            }
        }
    }
})

console.log(cartSlice)

export const {clearCart} = cartSlice.actions

export default cartSlice.reducer