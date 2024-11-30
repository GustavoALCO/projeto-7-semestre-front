import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/enviroument';
import {jwtDecode} from 'jwt-decode';


export interface Login {
    token: string; 
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = `${environment.Apiurl}`;

    private readonly http = inject(HttpClient)

    Login(user: string, password: string): Observable<Login> { 
        const url = `${this.apiUrl}/Login`
        
        const body = {
            login: user,
            password: password
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        console.log(this.apiUrl, body)
        return this.http.post<Login>(url, body , {headers}).pipe(
            //faz chamada http
            map(resp => {
                localStorage.setItem("jwt", resp.token); 
                return resp;
            })
        );
    }

    VerifyToken(): Observable<boolean>{

        const url = this.apiUrl + "/VerifyToken";

        const token = localStorage.getItem("jwt");
        if (!token) {
            console.error("Token JWT não encontrado.");
            return of(false); // Retorna false se o token for existir
        }

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        return this.http.get(url, { headers, observe: 'response'}).pipe(
            map((response) => {
                if (response.status === 200) {
                    console.log("Token válido.");
                    return true;
                } 
                return false
            }),
            catchError((error) => {
              return of(false); // Retorna false em caso de erro
            })
          );
    }

    getIdPayload(): string {
        const token = localStorage.getItem("jwt");

        if(!token)
            return '';

        const decode: any = jwtDecode(token);

        return decode.id
    }
}
