import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroument';

export interface Login {
    token: string; 
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = `${environment.Apiurl}/Login`;

    constructor(private http: HttpClient) { }

    Login(user: string, password: string): Observable<Login> { 
        const body = {
            login: user,
            password: password
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        console.log(this.apiUrl, body, { headers })
        return this.http.post<Login>(this.apiUrl, body, { headers });
    }

    setToken(token: string): void {
        localStorage.setItem('jwt', token); 
    }

    getToken(): string | null {
        return localStorage.getItem('jwt');
    }
}
