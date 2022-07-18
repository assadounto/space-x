import bookService from "../../services/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const GET_MISSIONS = 'SPACE-TRAVELLERS/MISSION/GET_MISSIONS';
export const JOIN_MISSIONS = 'SPACE-TRAVELLERS/MISSION/JOIN_MISSIONS';
export const LEAVE_MISSIONS = 'SPACE-TRAVELLERS/MISSION/LEAVE_MISSIONS';


const initialStateMission = {
    isLoading: false,
    isFailed: false,
    items: [],
};

export const getMissionsAction = (createAsyncThunk) => async(dispatch) => {
    const { data } = await bookService.getMission();
    const missionArray = [];
    data.map((mission) => {
        missionArray.push({
            missionID: mission.mission_id,
            missionName: mission.mission_name,
            missionDescription: mission.mission_description,
        });
        dispatch({
            type: GET_MISSIONS,
            payload: missionArray,
        });
    });
};

export const joinMissionAction = (payload) => ({
    type: JOIN_MISSIONS,
    payload,
});

export const leaveMissionAction = (payload) => ({
    type: LEAVE_MISSIONS,
    payload,
});

const missionRducer = (state = initialStateMission.items, action) => {
    switch (action.type) {
        case GET_MISSIONS:
            return action.payload;
        case JOIN_MISSIONS:
            return state.map((mission) => {
                if (mission.missionID === action.payload.missionID) {
                    return {
                        ...mission,
                        isJoined: true,
                    };
                }
                return mission;
            });
        case LEAVE_MISSIONS:
            return state.map((mission) => {
                if (mission.missionID === action.payload.missionID) {
                    return {
                        ...mission,
                        isJoined: false,
                    };
                }
                return mission;
            });
            default:
                return state;
    };
};

export default missionRducer;