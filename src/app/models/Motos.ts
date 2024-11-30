export interface Moto {

    idMoto: string,
    motoBrand: string,
    model: string,
    fuel: string,
    color: string,
    plate: string,
    age: number,
    km: number,
    price: number,
    url: string[]
    dateUpload: Date ,
    createUserId: string,
    dateUpdate: Date,
    alterationUserId: string,
    idStore: number
    phoneNumber:string[]
}

export interface MotoCreate {
    motoBrand: string;
    model: string;
    fuel: string;
    color: string;
    plate: string;
    age: number;
    km: number;
    price: number;
    url: string[];
    createUserId: string; 
}