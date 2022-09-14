import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import registerSlice from './registerSlice'
import basketSlice from './basketSlice'
import shopSlice from './shopSlice'

const store = configureStore({
    reducer:{
        log:loginSlice,
        reg:registerSlice,
        basket:basketSlice,
        shop:shopSlice
    }
})

export default store