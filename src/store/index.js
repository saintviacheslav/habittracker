import {configureStore} from '@reduxjs/toolkit'
import HabitSlice from '../slice/HabitSlice'
export default configureStore({
    reducer:{
        habits:HabitSlice
    }
})