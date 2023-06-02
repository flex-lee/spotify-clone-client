import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
  name: "play",
  initialState: {
    playingTracks: null,
    currentSongLyric: null,
    activePlaylist: null,
  },
  reducers: {
    setPlayingTracksAction(state, { payload }) {
      state.playingTracks = payload;
    },
    setCurrentSongLyricAction(state, { payload }) {
      state.currentSongLyric = payload;
    },
    setActivePlaylistAction(state, { payload }) {
      state.activePlaylist = payload;
    },
  },
});

export const {
  setPlayingTracksAction,
  setCurrentSongLyricAction,
  setActivePlaylistAction,
} = playSlice.actions;
export default playSlice.reducer;
