import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './features/categorySlice'
import medicineSlice from './features/medicineSlice'
import pharmacySlice from './features/pharmacySlice'
import cartSlice from './features/cartSlice'



export const store = configureStore({
  reducer: {
    category: categorySlice,
    medicine: medicineSlice,
    pharmacy: pharmacySlice,
    cart: cartSlice
  },
})
