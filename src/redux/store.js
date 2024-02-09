// store.js
import { configureStore } from '@reduxjs/toolkit';

// Importa tus slices aquí
import appReducer from './appReducer';

export const store = configureStore({
  reducer: {
    // Aquí añades tus reducers. Por ejemplo, un reducer de contador.
    data: appReducer,
  },
});
