import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts',async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
})


const productSlice = createSlice({
    name :'products',
    initialState :{
        items :[],
        status :'idle'
    },
    reducers :{},
    extraReducers :(builder)=>{
            builder
            .addCase(fetchProducts.pending,(state)=>{
                state.status ='loading'
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.status ='succeeded',
                console.log(action.payload)
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected,(state)=>{
                state.status ='failed'
            })
    }
})

export default productSlice.reducer;