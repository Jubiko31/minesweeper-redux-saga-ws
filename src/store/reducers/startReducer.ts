import { createSlice } from '@reduxjs/toolkit';

interface StartState {
    level: number,
}
interface ActionType {
    payload: number;
}

const initialState: StartState = {
    level: 0,
};

const StarterSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        startGame(state: StartState, action: ActionType) {
            state.level = action.payload;
        },
    },
});

export const { startGame } = StarterSlice.actions;
export const startReducer = StarterSlice.reducer;