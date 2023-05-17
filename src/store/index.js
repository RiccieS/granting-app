import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;