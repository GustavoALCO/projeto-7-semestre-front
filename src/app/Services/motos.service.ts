import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/enviroument';
import { Moto, MotoCreate } from '../models/Motos';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  private apiUrl = `${environment.Apiurl}/Motos`

  private readonly http = inject(HttpClient)

  GetMotosModel(model:string, page:number){
    const url = this.apiUrl + `?model=${model}&page=${page}`;
    return this.http.get<Moto[]>(url);
  }

  GetMotosId(Id:string){
    const url = this.apiUrl +`/${Id}`;
    return this.http.get<Moto>(url);
  }

  GetMotosFilter(
    Brand: string[] = [], 
    model: string = '', 
    color: string = '', 
    age: number[] = [], 
    km: number[] = [], 
    price: number[] = [], 
    page: number = 1
  ) {
    // Monta a URL base
    const url = `${this.apiUrl}/Filtro`;
  
    // Cria os parâmetros da consulta
    let params = new HttpParams().set('page', page);

    // Adiciona os parâmetros dinâmicos à URL (se existirem e não forem null ou undefined)
    if (Brand && Brand.length > 0) {
      Brand.forEach(brand => {
        if (brand) { // Verifica se o valor não é null ou undefined
          params = params.append('MotoBrand', brand);
        }
      });
    }
  
    // Adiciona parâmetros opcionais se estiverem definidos e não forem vazios
    if (model !== undefined || model !== null) {
      params = params.set('Model', model);
    }

    if (color !== undefined || model !== "null") {
      params = params.set('Color', color);
    }
    
    if (age && age.length > 0) {
      age.forEach(y => {
        if (y !== null && y !== undefined) { // Verifica se o valor não é null ou undefined
          params = params.append('Age', y);
        }
      });
    }
  
    if (km && km.length > 0) {
      km.forEach(k => {
        if (k !== null && k !== undefined) { // Verifica se o valor não é null ou undefined
          params = params.append('Km', k);
        }
      });
    }
  
    if (price && price.length > 0) {
      price.forEach(p => {
        if (p !== null && p !== undefined) { // Verifica se o valor não é null ou undefined
          params = params.append('Price', p);
        }
      });
    }
  
    
  
    console.log(url, { params });
    
    // Faz a requisição GET com os parâmetros
    return this.http.get<Moto[]>(url, { params });
  }

  PostMotos(Brand:string, Model:string, Year:number, Color:string,Plate:string ,Url:string[], Fuel:string, Price:number,Km:number ,Store:number, Iduser: string)
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
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      });
      console.log(this.apiUrl, body, {headers})
      return this.http.post<Moto>(this.apiUrl, body, {headers})
  }

  PutMotos(IdMoto:string | null,Brand:string, Model:string, Age:number, Color:string,Plate:string ,Url:string[],Fuel:string, Price:number,Km:number ,Store:number, Iduser: string)
  {
    const body = {
      motoBrand: Brand,
      model: Model,
      fuel:Fuel,
      color: Color,
      plate:Plate,
      age: Age,
      km:Km,
      price:Price,
      url:Url,
      alterationUserId:Iduser,
      idStore: Store
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      });
      var putUrl = `${this.apiUrl}/${IdMoto}`
      console.log(putUrl, body)
      return this.http.put<Moto>(putUrl, body, {headers , observe: 'response'})
  }

  DeleteMotos(id:string)
  {
    var url = `${this.apiUrl}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });
    return this.http.delete(url, {headers});
  }    
}
