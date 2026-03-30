import { configureStore } from '@reduxjs/toolkit';
import configReducer from './reducers/configSlice';
import gameReducer from './reducers/gameSlice';
import statisticsReducer from './reducers/statisticsSlice';

const store = configureStore({
  reducer: {
    config: configReducer,
    game: gameReducer,
    statistics: statisticsReducer,
  },
});

export default store;