import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items :[], //Final cart items
    tempItems :[], //Temporary items for updates
    totalPrice :0
}


const cartSlice = createSlice({
    name :'cart',
    initialState,
    reducers :{
        addToCart(state,action)
        {
           const existingItem = state.items.find(item=>item.id === action.payload.id)
           if (existingItem) 
           {
                existingItem.quantity+=1;
           } 
           else 
           {
                state.items.push({...action.payload,quantity:1})
           }
           state.tempItems = [...state.items];
           state.totalPrice = state.items.reduce((sum,item)=>sum+item.price*item.quantity,0)
        },
        removeFromCart(state,action)
        {
            state.items = state.items.filter(item=>item.id !== action.payload);
            state.tempItems=[...state.items];
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer