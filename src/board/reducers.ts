import { createSlice } from "@reduxjs/toolkit";

interface BoardState {
    map: string[],
    message: string,
}

const MapPayload = (payload: any): string[] => {
    const rows = payload.split('map: ')[1].split['\n'];
    return rows.filter((item: string[]) => Boolean(item.length));
}

const initialState: BoardState = {
    map: [],
    message: '',
}

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setMap(state, action) {
            state.map = MapPayload(action.payload);
        },
        setMessage(state, action) {
            state.message = action.payload;
        }
    }
});

export const { setMap, setMessage } = BoardSlice.actions;
export const  boardReducer = BoardSlice.reducer;