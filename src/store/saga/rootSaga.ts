import { takeLatest } from 'redux-saga/effects';
import { watchOnGame } from '../actions/gameAction';
import { handleStartGame } from '../actions/startAction';
import { handleOpenCell } from '../actions/playAction';
import { initializeGame } from '../reducers/gameReducer';
import { startGame } from '../reducers/startReducer';
import { openCell } from '../reducers/playReducer';

export function* watcherSaga() {
    yield takeLatest(initializeGame.type, watchOnGame);
    yield takeLatest(startGame.type, handleStartGame);
    yield takeLatest(openCell.type, handleOpenCell);
}