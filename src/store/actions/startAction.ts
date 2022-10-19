import { apply } from 'redux-saga/effects'
import { Client } from '../../lib/client'

export function* handleStartGame(action: any) {
    yield apply(Client.socket, Client.socket.send, [
        `new ${action.payload}`,
    ]);
}