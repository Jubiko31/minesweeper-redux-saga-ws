import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { boardReducer } from './reducers/gameReducer'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        board: boardReducer,
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

// sagaMiddleware.run()

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;