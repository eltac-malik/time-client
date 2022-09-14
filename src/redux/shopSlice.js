import {createSlice} from '@reduxjs/toolkit'

const shopSlice = createSlice({
    name:"shop",
    initialState:{
        regdata:{
            inpval:""
        }
    },
    reducers:{
        setInpData:(state,action)=>
        {
            state.regdata = action.payload
        }
    }
})

export default shopSlice.reducer
export const {setInpData} = shopSlice.actions