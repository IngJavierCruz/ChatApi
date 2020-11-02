import { Socket } from "socket.io";
import { User } from "../class/user";
import { UserList } from "../class/user-list";

export const userConnected = new UserList();


export const connectClient = (client: Socket) => {

    const user = new User(client.id);
    userConnected.addUser(user);

};


export const desconnected = (client: Socket) => {
    
    client.on('disconnect', () => {
        let userDelete = userConnected.deleteUser(client.id);
        console.log(`Client desconected ${userDelete?.name} `);
    });

};


// LISTEN MESSAGES FROM ANGULAR
export const message = (client: Socket, io: SocketIO.Server) => {

    client.on('message',(payload: { autor: string, message: string} ) => {

        console.log('Message received', payload);

        io.emit('new-message', payload);

    });
}



export const configUser = (client: Socket, io: SocketIO.Server) => {

    client.on('config-user',(payload: { name: string }, callback: Function) => {

        userConnected.updateUser({ id: client.id, name: payload.name });

        callback({
            data: {
                name: payload.name
            },
            success: true,
            message: 'Configured user'
        });

    }); 

}


