import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroument';
import { User } from '../models/User.';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.Apiurl}/User`

  constructor(private http: HttpClient) { }

  
  GetUsers(token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User>(this.apiUrl , {headers});
  }

  GetUsersName(token:string, nome:string){
    var url = this.apiUrl + `?name: ${nome}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User[]>(url, {headers})
  }

  GetUserId(id: string, token:string){
    var url = this.apiUrl + `${id}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<User>(url, {headers});
  }

  PutUser(id:string,token:string , IdStore: number,
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
                                        'Authorization': `Bearer ${token}`
                                      });

                                      var url = `${this.apiUrl}/PutUser/${id}`;

                                      return this.http.put<User>(url, body ,{headers})
                                    }

  CreateUser(id:string,token:string , IdStore: number,
                                      Name: string,
                                      LastName: string,
                                      Role: string,
                                      Login: string,
                                      Password: string,
                                      CreateUserId: string)
                                      {
                                      const body ={
                                        idStore: IdStore,
                                        name: Name,
                                        lastName: LastName,
                                        role: Role,
                                        login: Login,
                                        password: Password,
                                        createUserId: CreateUserId
                                        }
  
                                        const headers = new HttpHeaders({
                                          'Content-Type': 'application/json',
                                          'Authorization': `Bearer ${token}`
                                        });
  
                                        var url = `${this.apiUrl}/PutUser/${id}`;
  
                                        return this.http.post<User>(url, body ,{headers})
                                      }  
                                      
    DeleteUser(Id:string, token:string){
      var url = this.apiUrl + `/Delet/${Id}` 

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this.http.delete<User>(url , {headers})
    }
  
}
