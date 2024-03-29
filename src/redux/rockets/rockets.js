import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookService from '../../services/services';

const initialState = {
  isLoading: false,
  isFailed: false,
  items: [],
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const { data } = await bookService.getRockets();
    return data;
  },
);

const rockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    RESERVE(state, action) {
      const newState = state.items.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      const thestate = state;
      thestate.items = newState;
    },
    CANCEL(state, action) {
      const newState = state.items.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      const thestate = state;
      thestate.items = newState;
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => {
      const rockets = (action.payload).map((key) => ({
        rocketName: key.rocket_name,
        id: key.id,
        description: key.description,
        flickrImages: key.flickr_images,
        reserved: false,
        wikipedia: key.wikipedia,
      }));
      const thestate = state;
      thestate.isLoading = false;
      thestate.items = rockets;
    },
    [getRockets.pending]: (state) => { const thestate = state; thestate.isLoading = true; },
    [getRockets.rejected]: (state) => { const thestate = state; thestate.isFailed = true; },
  },
});

export const { RESERVE, CANCEL } = rockets.actions;

export default rockets.reducer;
