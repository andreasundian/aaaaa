import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    difficulty: 'easy',
    subject: 'math',
    playerName: '',
  },
  reducers: {
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
    setSubject(state, action) {
      state.subject = action.payload;
    },
    setPlayerName(state, action) {
      state.playerName = action.payload;
    },
  },
});

export const { setDifficulty, setSubject, setPlayerName } = configSlice.actions;
export default configSlice.reducer;