import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, options } from "../../apis/musicAPI";

const initialState = {
  music: {
    hits: {},
    trending: {},
    latest: {},
    retro: {},
    details: {},
    searchRes: {},
  },
  musicList: {
    favourite: [],
    playlist: [],
  },
};

// createAsyncThunk("slice_name/function_name",()=>{})

export const asyncfetchHitMusic = createAsyncThunk(
  "music/asyncfetchHitMusic",
  async (text) => {
    const response = await fetch(`${baseURL}/search?term=${text}`, options);
    const data = await response.json();
    return data;
  }
);

export const asyncfetchTrendingMusic = createAsyncThunk(
  "music/asyncfetchTrendingMusic",
  async (text) => {
    const response = await fetch(`${baseURL}/search?term=${text}`, options);
    const data = await response.json();
    return data;
  }
);
export const asyncfetchLatestMusic = createAsyncThunk(
  "music/asyncfetchLatestMusic",
  async (text) => {
    const response = await fetch(`${baseURL}/search?term=${text}`, options);
    const data = await response.json();
    return data;
  }
);
export const asyncfetchRetroMusic = createAsyncThunk(
  "music/asyncfetchRetroMusic",
  async (text) => {
    const response = await fetch(`${baseURL}/search?term=${text}`, options);
    const data = await response.json();
    return data;
  }
);

export const asyncFetchSongDetails = createAsyncThunk(
  "music/asyncFetchSongDetails",
  async (key) => {
    const response = await fetch(
      `${baseURL}/songs/get-details?key=${key}`,
      options
    );
    const data = await response.json();
    return data;
  }
);
export const asyncSearchMusic = createAsyncThunk(
  "music/asyncSearchMusic",
  async (text) => {
    const response = await fetch(`${baseURL}/search?term=${text}`, options);
    const data = await response.json();
    return data;
  }
);

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    // increment: (state, action) => {
    //   state.value = action.payload;
    // },
    addMusicToFavourite: (state, action) => {
      state.musicList.favourite.push(action.payload);
    },
    addMusicToPlaylist: (state, action) => {
      state.musicList.playlist.push(action.payload);
    },

    removeFromFavourite: (state, action) => {
      state.musicList.favourite.splice(action.payload, 1);
    },

    removeFromPlayList: (state, action) => {
      state.musicList.playlist.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [asyncfetchHitMusic.fulfilled]: (state, action) => {
      console.log("fetched");
      console.log(state);
      return { ...state, music: { ...state.music, hits: action.payload } };
    },

    [asyncfetchTrendingMusic.fulfilled]: (state, action) => {
      console.log("fetched");
      console.log(state);
      return { ...state, music: { ...state.music, trending: action.payload } };
    },
    [asyncfetchLatestMusic.fulfilled]: (state, action) => {
      console.log("fetched");
      return { ...state, music: { ...state.music, latest: action.payload } };
    },
    [asyncfetchRetroMusic.fulfilled]: (state, action) => {
      console.log("fetched");
      return { ...state, music: { ...state.music, retro: action.payload } };
    },
    [asyncFetchSongDetails.fulfilled]: (state, action) => {
      return { ...state, music: { ...state.music, details: action.payload } };
    },

    [asyncSearchMusic.fulfilled]: (state, action) => {
      console.log("fetched");
      return { ...state, music: { ...state.music, searchRes: action.payload } };
    },
  },
});

export const {
  addMusicToFavourite,
  addMusicToPlaylist,
  removeFromFavourite,
  removeFromPlayList,
} = musicSlice.actions;
export default musicSlice.reducer;
