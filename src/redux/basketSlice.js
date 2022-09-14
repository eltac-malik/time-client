import {createSlice} from '@reduxjs/toolkit'

let x = JSON.parse(localStorage.getItem("basket"));

const basketSlice = createSlice({
    name:"basket",
    initialState:{
        basket:JSON.parse(localStorage.getItem("basket")),
        count:x&&x.length,
        wishList:JSON.parse(localStorage.getItem('wish'))
    },
    reducers:{
        setBasket:(state,action)=>
        {
            state.basket = action.payload
        },
        delBasket:(state,action)=>
        {
            let newFilter = state.basket.filter(e=> e.id !== action.payload)
            localStorage.setItem("basket",JSON.stringify(newFilter))
            state.basket = JSON.parse(localStorage.getItem("basket"))
        },
        addCount:(state,action)=>
        {
            state.count +=1
        },
        decCount:(state,action)=>
        {
            state.count > 0 ? state.count = state.count - 1: state.count = 0
        },
        setWish:(state,action)=>
        {
            state.wishList = action.payload
        }
        
    }
})

export default basketSlice.reducer;
export const {setBasket,delBasket,addCount,decCount,setWish} = basketSlice.actions