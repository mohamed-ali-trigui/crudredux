import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice" //nom significatif 

const store = configureStore({
    reducer: {
    storearticles:articlesReducer,

    }
})
export default store