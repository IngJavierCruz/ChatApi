import { User } from "./user";


export class UserList {


    private list: User[] = [];

    constructor() {}

    public addUser(user: User) {
        this.list.push(user);
        console.log(this.list);
        return user;
    }


    public updateUser(userUpdate: User) {

        for (const user of this.list) {
            if (user.id == userUpdate.id) {
                user.name = userUpdate.name;
                break;
            }
        }

        console.log(this.list);

    }


    public getList() {
        return this.list;
    }



    public getUser(id: string) {
        return this.list.find(user => user.id === id );
    }



    public getUserBySala(sala:string) {
        return this.list.filter(user => user.sala === sala);
    }


    public deleteUser(id: string) {

        const userDelete = this.getUser(id);
        this.list = this.list.filter(user => user.id !== id );

        return userDelete;
    }
}