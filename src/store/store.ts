import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { boardReducer } from './reducers/gameReducer'
import { startReducer } from "./reducers/startReducer";
import { playReducer } from "./reducers/playReducer";
import { watcherSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        board: boardReducer,
        option: startReducer,
        play: playReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({
            thunk: false,
        }), sagaMiddleware];
    },
    devTools: {
        trace: process.env.NODE_ENV !== 'development',
    },
});

sagaMiddleware.run(watcherSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;