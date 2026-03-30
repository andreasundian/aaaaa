import { configureStore } from '@reduxjs/toolkit';
import configSlice from './slices/configSlice';
import gamifySlice from './slices/gamifySlice';
import statisticsSlice from './slices/statisticsSlice';

const store = configureStore({
  reducer: {
    config: configSlice,
    gamify: gamifySlice,
    statistics: statisticsSlice,
  },
});

export default store;