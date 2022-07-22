import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookService from '../../services/services';

const initialState = {
  isLoading: false,
  isFailed: false,
  items: [],
};

export const getMission = createAsyncThunk(
  'missions/getMission',
  async () => {
    const { data } = await bookService.getMission();
    return data;
  },
);

const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    JOIN_MISSION(state, action) {
      const newState = state.items.map((mission) => {
        if (mission.missionId !== action.payload) return mission;
        return { ...mission, joined: true };
      });
      const thestate = state;
      thestate.items = newState;
    },
    LEAVE_MISSION(state, action) {
      const newState = state.items.map((mission) => {
        if (mission.missionId !== action.payload) return mission;
        return { ...mission, joined: false };
      });
      const thestate = state;
      thestate.items = newState;
    },
  },
  extraReducers: {
    [getMission.fulfilled]: (state, action) => {
      const missions = (action.payload).map((key) => ({
        missionName: key.mission_name,
        missionId: key.mission_id,
        description: key.description,
        joined: false,
        wikipedia: key.wikipedia,
      }));
      const thestate = state;
      thestate.isLoading = false;
      thestate.isFailed = false;
      thestate.items = missions;
    },
    [getMission.pending]: (state) => { const thestate = state; thestate.isLoading = true; },
    [getMission.rejected]: (state) => { const thestate = state; thestate.isFailed = true; },
  },
});

export const { JOIN_MISSION, LEAVE_MISSION } = missions.actions;

export default missions.reducer;
