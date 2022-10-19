import { WEBSOCKET_URL } from "../utils/constants";

type Socket = WebSocket;
class Client {
    private static _ws: Socket;

    public static get socket() {
        return this._ws;
    }
    public static set socket(conn: Socket) {
        this._ws = conn;
    }

    public static connect(url: string = WEBSOCKET_URL) {
        if (Client.socket) {
            return Client.socket;
        }
        Client.socket = new WebSocket(url);
        return Client.socket;
    }
}

export { Client };