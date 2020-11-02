export class User {
    public id: string;
    public name? = 'Anónimo';
    public sala? = 'No asignada';


    constructor(id: string) {
        this.id = id;
    }
}