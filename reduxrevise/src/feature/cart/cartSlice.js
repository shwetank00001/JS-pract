import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartList } from "../../cartItems";

const initialState = {
    cartItem: cartList,
    amount: 10,
    total: 0,
    isLoading: true
};

// const url = "https://course-api.com/react-useReducer-cart-project";
const url = "https://course-api.com/react-useReducer-cart-project";


export const getAllData = createAsyncThunk("cart/getAllData", async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        return await response.json();
    } catch (error) {
        throw error;
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItem = [];
            state.amount = 0;
            state.total = 0;
            state.isLoading = true;
        },
        removeItem: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
        },
        increamAmt: (state, action) => {
            const item = state.cartItem.find(item => item.id === action.payload);
            if (item) item.amount += 1;
        },
        descreaseAmt: (state, action) => {
            const item = state.cartItem.find(item => item.id === action.payload);
            if (item && item.amount > 1) item.amount -= 1;
        },
        totalAmt: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItem.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItem = action.payload;
                console.log(action)
            })
            .addCase(getAllData.rejected, (state,action) => {
                state.isLoading = false;
                console.log(action)
            });
    }
});

export const { clearCart, removeItem, increamAmt, descreaseAmt, totalAmt } = cartSlice.actions;

export default cartSlice.reducer;
