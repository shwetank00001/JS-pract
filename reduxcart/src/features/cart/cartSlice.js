import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartList } from "../../cartItems";

const initialState = {
    cartItems: cartList,
    selectedItem: [],
    cartTotal: 0,
    cartTotalPrice: 0,
    amount: 0,
    cartTotal: 0
}
const url = "https://fakestoreapi.com/products"

const getData = createAsyncThunk('cart/getData', async() => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addItemToCart : (state,action) => {
            console.log(action.payload)
            state.selectedItem.push(action.payload)
        },
        removeFromCart : (state,action) => {
            state.selectedItem = state.selectedItem.filter(function(item){
                return item.id !== action.payload
            })
        },
        increaseAmt : (state,action) => {
            console.log(action.payload)
            const item = state.cartItems.find(function(item){
                console.log(item)
                return item.id === action.payload
            });
            console.log("item", item)
            if (item) {
                item.amount += 1
            };

        },
        decreaseAmt : (state,action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.amount > 1) item.amount -= 1;
        },
        cartTotal : (state, action) => {

        }
    }
})
console.log(cartSlice)

export const {addItemToCart, removeFromCart, increaseAmt, decreaseAmt} = cartSlice.actions

export const cartReducer = cartSlice.reducer