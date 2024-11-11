import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroument';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../models/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl = `${environment.Apiurl}/Store`

  constructor(private http:HttpClient) { }

  GetStore(token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Store[]>(this.apiUrl, {headers})
  }

  DeleteStore(token:string, id:string){

    var url = `${this.apiUrl}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<Store>(url, {headers});
  }

  CreateStore(token:string,
              Adress: string,
              AdressNumber: number,
              Cep: string,
              PhoneNumbers: string[])
              {
                const body = {
                  adress: Adress,
                  adressNumber: AdressNumber,
                  cep: Cep,
                  phoneNumbers: PhoneNumbers
                }

                const headers = new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                });

                return this.http.post<Store>(this.apiUrl, body, {headers});
              }

  AlterationStore(token:string,
                  Adress: string,
                  AdressNumber: number,
                  Cep: string,
                  PhoneNumbers: string[]
  )
  {
    const body = {
      adress: Adress,
      adressNumber: AdressNumber,
      cep: Cep,
      phoneNumbers: PhoneNumbers
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<Store>(this.apiUrl, body, {headers})
  }
}
