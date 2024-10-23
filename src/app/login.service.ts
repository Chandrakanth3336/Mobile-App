import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private baseurl= 'http://localhost:3000/login';
  private apiUrl='http://localhost:3000/register';
  

  constructor(private _httpClient:HttpClient) { }

  userRegistered(email:string):Observable<boolean>{
    return this._httpClient.get<any>(this.apiUrl + '?email=' + email).pipe(
      map(users => users.length > 0))
  }

  getpasswordByEmail(email: string): Observable<any> {
    console.log(`Fetching user with email: ${email}`);
    return this._httpClient.get<any[]>(this.apiUrl + '?email=' + email).pipe(
      map((users: any[]) => {
        console.log(`Users fetched: `, users);
        if (users.length > 0) {
          return users[0];  
        } else {
          alert('User not found');
        }
      })
    );
  }

  forgotPassword(newPassword: string, id: string): Observable<any> {
    return this._httpClient.get(this.apiUrl + '/' + id).pipe(
      switchMap((user: any) => {
        
        const updatedUser = { ...user, password: newPassword };
        return this._httpClient.put<any>(this.apiUrl + '/' + id, updatedUser);
      })
    );
  }

   getLoginServices(payload: any):Observable<any>{
    return this._httpClient.post(this.baseurl,payload)
   }

   onRegister(asdf:any):Observable<any>{
    return this._httpClient.post(this.apiUrl,asdf)
 }
}
