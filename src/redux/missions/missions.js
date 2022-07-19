import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookService from '../../services/services';

const initialStateMission = {
    isLoading: false,
    isFailed: false,
  items: [],
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const { data } = await bookService.getMission();
    return data;
  },
);


const missions = createSlice({
  name: 'missions',
  initialStateMission,
  reducers: {
    JOIN_MISSION(state, action) {
        const newState = state.items.map(mission => {
            if(mission.mission_id!== action.payload) 
                return mission;
            return { ...mission, joined: true };
        });

        state.items = newState;
    },
    LEAVE_MISSION(state, action) {
        const newState = state.items.map(mission => {
            if(mission.mission_id !== action.payload) 
                return mission;
            return { ...mission, joined:false };
        });
        state.items = newState;
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => {
      const missions = (action.payload).map( (key) => ({
        mission_name: key.mission_name,
        mission_id: key.mission_id,
        description: key.description, 
        joined:false 
      }))
      const thestate = state;
      thestate.isLoading = false;
      thestate.items = missions;
    },
    [getMissions.pending]: (state) => { const thestate = state; thestate.isLoading = true; },
    [getMissions.rejected]: (state) => { const thestate = state; thestate.isFailed = true; },
  },
});

export const { JOIN_MISSION, LEAVE_MISSION } = missions.actions;

export default missions.reducer;
