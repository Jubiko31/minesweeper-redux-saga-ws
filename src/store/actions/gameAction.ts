/* eslint-disable @typescript-eslint/no-explicit-any */
import { fork, apply, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { Client } from '../../lib/client';
import {setMap, setStatus } from '../reducers/gameReducer';

function createSocketChannel(socket: WebSocket) {
    return eventChannel((emit: (input: string | Error) => void) => {
        const handleOnMessage = (event: MessageEvent) => {
            emit(event.data);
        };

        const errorHandler = (ErrorEvent: any) => {
            emit(new Error(ErrorEvent?.reason || 'Uknown'));
        };

        socket.addEventListener('message', handleOnMessage);
        socket.addEventListener('error', errorHandler);

        const unsubscribe = () => {
            socket.removeEventListener('message', handleOnMessage);
        };

        return unsubscribe;
    });
}

function* getGameBoard(socket: WebSocket) {
    yield apply(socket, socket.send, ['map']);
}

export function* watchOnGame(): any {
    const socket: WebSocket = yield call(Client.connect);
    const channel = yield call(createSocketChannel, socket);

    while(1) {
        try {
            const data = yield take(channel);
            if (data.includes('map:')) {
                yield put(setMap(data));
            }
            if (data.includes('new:')) {
                yield fork(getGameBoard, socket);
            }
            if (data.includes('open:')) {
                yield put(setStatus(data.split('open: ')[1]));
                yield fork(getGameBoard, socket);
            }
        } catch(err) {
            console.error('error: ', err);
            channel.close();
        }
    }
}