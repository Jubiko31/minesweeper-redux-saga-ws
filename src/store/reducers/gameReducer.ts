/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";

interface BoardState {
    map: string[],
    message: string,
    status: number,
}

const MapPayload = (payload: any): string[] => {
    const rows = payload.split('map: ')[1].split['\n'];
    return rows.filter((item: string[]) => Boolean(item.length));
}

const initialState: BoardState = {
    map: [],
    message: '',
    status: -1,
}

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        initializeGame() {},
        setMap(state :BoardState, action) {
            state.map = MapPayload(action.payload);
        },
        setMessage(state: BoardState, action) {
            state.message = action.payload;
        },
        restartGame(state: BoardState) {
            state.status = -1;
        },
        setStatus(state: BoardState, action) {
            const status = action.payload as string;
            state.status =
                status === '' || status === 'OK' ? -1 : status === 'You Lose' ? 0 : 1;
        },
    },
});

export const { initializeGame, setMap, setMessage, setStatus, restartGame } = BoardSlice.actions;
export const  boardReducer = BoardSlice.reducer;