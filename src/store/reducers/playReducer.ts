import { createSlice } from '@reduxjs/toolkit';

type TStatus = 'success' | 'failed' | 'default';
interface CellProps {
    key: string;
    text: string;
    disabled: boolean;
    isFlag: boolean;
    onClick: () => void;
    onSetFlag: () => void;
}

interface PlayState {
    flags: Array<Array<number>>;
}

interface ActionType {
    payload: Record<string, number>;
}

const initialState: PlayState = {
    flags: [],
};

const PlaySlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        openCell(state: PlayState, action: ActionType) { return; },
        setFlag(state: PlayState, action: ActionType) {
            const { row, col } = action.payload;
            const index = state.flags.findIndex(
                (flag: Array<number>) => flag[0] === row && flag[1] === col
            );
            if (index !== -1) state.flags.splice(index, 1);
            else state.flags.push([row, col]);
        },
        clearFlags(state: PlayState) {
            state.flags = [];
        },
    },
});

export const { openCell, setFlag, clearFlags } = PlaySlice.actions;
export const playReducer = PlaySlice.reducer;