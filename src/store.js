import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/product/productSlice';
import cartReducer from './components/cart/cartSlice'
import shoeReducer from './components/shoe/shoeSlice'
//import { setupListeners } from '@reduxjs/toolkit/query'
//import { combineReducers } from '@reduxjs/toolkit'
//import { apiSlice } from './components/features/apiSlice'
//import useCartReducer from './components/features/useCartSlice'
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


  const persistConfig = {
    key: 'root',
    storage,
  }

  //export const rootReducers = combineReducers({
  //  cart: cartReducer,
  //  [apiSlice.reducerPath]: apiSlice.reducer,
 // })
  const persistedReducer = persistReducer(persistConfig, cartReducer)
 // const store = configureStore({
   // reducer: {
   ///     persistedReducer,
    //    product: productReducer,
     //   shoe: shoeReducer,

    //},
    

export const store = configureStore({
    reducer: {
        cart: persistedReducer,
        product: productReducer,
        shoe: shoeReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store);
