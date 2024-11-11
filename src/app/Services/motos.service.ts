import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroument';
import { Moto, MotoCreate } from '../models/Motos';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  private apiUrl = `${environment.Apiurl}/Motos`

  constructor(private http: HttpClient) { }

  GetMotos() {
    return this.http.get<Moto[]>(this.apiUrl);
  }

  GetMotosHome(){
    return this.http.get<Moto[]>(`${this.apiUrl}/Destaque`);
  }

  GetMotosModel(model:string, page:number){
    const url = this.apiUrl + `?model=${model}&page=${page}`;
    return this.http.get<Moto[]>(url);
  }

  GetMotosId(Id:string){
    const url = this.apiUrl +`/${Id}`;
    return this.http.get<Moto>(url);
  }

  GetMotosFilter(Brand:string, model:string, year1:number, year2:number, color:string, page:number){
    const url = this.apiUrl + 
    `/Filtro?motoBrand=${Brand}&model=${model}3&age=${year1}&age=${year2}&color=${color}&page${page}`;

    return this.http.get<Moto[]>(url);
  }

  PostMotos(Brand:string, Model:string, Year:number, Color:string,Plate:string ,Url:string[],Fuel:string, Price:string,Km:number ,Store:number, Iduser: string ,token:string)
  {
    const body = {
      motoBrand: Brand,
      model: Model,
      fuel:Fuel,
      color: Color,
      plate:Plate,
      age: Year,
      km:Km,
      price:Price,
      url:Url,
      createUserId: Iduser,
      IdStore:Store
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this.http.post<Moto>(this.apiUrl, body, {headers})
  }

  PutMotos(IdMoto:string ,Brand:string, Model:string, Year:number, Color:string,Plate:string ,Url:string[],Fuel:string, Price:string,Km:number ,Store:number, Iduser: string ,token:string)
  {
    const body = {
      motoBrand: Brand,
      model: Model,
      fuel:Fuel,
      color: Color,
      plate:Plate,
      age: Year,
      km:Km,
      price:Price,
      url:Url,
      alterationUserId:Iduser,
      idStore: Store
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      var putUrl = `${this.apiUrl}/${IdMoto}`
      return this.http.put<Moto>(putUrl, body, {headers})
  }

  DeleteMotos(id:string, token:string)
  {
    var url = `${this.apiUrl}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(url, {headers});
  }    
}
