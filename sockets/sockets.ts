import { Socket } from "socket.io";

export const desconnected = (client: Socket) => {
    
    client.on('disconnect', () => {
        console.log('Client desconected');
    });

};


// LISTEN MESSAGES FROM ANGULAR
export const message = (client: Socket, io: SocketIO.Server) => {

    client.on('message',(payload: { autor: string, message: string} ) => {

        console.log('Message received', payload);

        io.emit('new-message', payload);

    });
}


