import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/enviroument';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../models/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl = `${environment.Apiurl}/Store`

  private readonly http = inject(HttpClient)

  GetStore(adress:string){
    const url = this.apiUrl + `?Adress=${adress}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });

    return this.http.get<Store[]>(url, {headers})
  }

  GetStoreId(id:number | null  ){
    const url = this.apiUrl + `/${id}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });
    console.log(url)
    return this.http.get<Store>(url, {headers})
  }

  DeleteStore(id:number){

    var url = `${this.apiUrl}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    });

    return this.http.delete<Store>(url, {headers});
  }

  CreateStore(Adress: string,
              AdressNumber: number,
              Cep: string,
              PhoneNumber1:string,
              PhoneNumber2:string)
              {
                const body = {
                  adress: Adress,
                  adressNumber: AdressNumber,
                  cep: Cep,
                  phoneNumbers: [
                    PhoneNumber1,
                    PhoneNumber2
                  ]
                }

                const headers = new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem("jwt")}`
                });
                
                return this.http.post<Store>(this.apiUrl, body, {headers});
              }

  AlterationStore(
                  Adress: string,
                  AdressNumber: number,
                  Cep: string,
                  PhoneNumbers1: string,
                  PhoneNumbers2: string
  )
  {
    const body = {
      adress: Adress,
      adressNumber: AdressNumber,
      cep: Cep,
      phoneNumbers: [
        PhoneNumbers1,
        PhoneNumbers2
      ]
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });
    console.log(this.apiUrl, body, {headers})
    return this.http.put<Store>(this.apiUrl, body, {headers})
  }
}
