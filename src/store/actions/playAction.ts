import { apply } from 'redux-saga/effects';
import { Client } from '../../lib/client';

export function* handleOpenCell(action: any) {
    const { row, col } = action.payload;
    yield apply(Client.socket, Client.socket.send, [
        `open ${col} ${row}`
    ])
}