/*import { configureStore } from "@reduxjs/toolkit";
import {episodeReducer} from './features/slice /episodeSlice'

export const store = configureStore({

  reducer:{
    episodes: episodeReducer,
 },
})*/



import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
