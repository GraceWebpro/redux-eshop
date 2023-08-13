import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/product/productSlice';
import cartReducer from './components/cart/cartSlice'
import shoeReducer from './components/shoe/shoeSlice'
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

  const persistedReducer = persistReducer(persistConfig, cartReducer)
 

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
