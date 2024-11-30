import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/enviroument';
import { User } from '../models/User.';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.Apiurl}/Users`

  private readonly http = inject(HttpClient)


  GetUsers(nome:string){
    var url = this.apiUrl + `?Name=${nome}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });
    
    return this.http.get<User[]>(url, {headers})
  }

  GetUserId(id: string | null){
    var url = this.apiUrl + `/${id}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    });
    
    return this.http.get<User>(url, {headers});
  }

  PutUser(id:string,
          IdStore: number,
          Name: string,
          LastName: string,
          Role: string,
          Login: string,
          Password: string,
          alterationUserId: string)
          {
          const body ={
            idStore: IdStore,
            name: Name,
            lastName: LastName,
            role: Role,
            login: Login,
            password: Password,
            alterationUserId: alterationUserId
            }

            const headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            });

            var url = `${this.apiUrl}/${id}`;
            console.log(url,body)
            return this.http.put<User>(url, body ,{headers})
          }

          CreateUser(
            idStore: number,
            name: string,
            lastName: string,
            role: string,
            login: string,
            password: string,
            createUserId: string
          ) {
            const body = {
              idStore,
              name,
              lastName,
              role,
              login,
              password,
              createUserId
            };
          
            const headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            });
          
            return this.http.post<User>(this.apiUrl, body, { headers });
          }
          
                                      
    DeleteUser(Id:string){
      var url = this.apiUrl + `/${Id}` 

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      });

      return this.http.delete<User>(url , {headers})
    }
  
    AlterPassword(idPasword:string, password:string, IdAdmin:string)
    {
      var url = `${this.apiUrl}/Alter/${idPasword}`

      const body ={
        password,
        IdAdmin
      }

      const headers = new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      })

      return this.http.put<User>(url, body, { headers });
    }

}
