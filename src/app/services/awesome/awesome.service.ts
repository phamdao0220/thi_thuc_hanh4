import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<any> {
    return this.http.get(`${environment.url}`);
  }
  // getAwesome(id: number):Observable<any>{
  //   return this.http.get(`${environment.url}/${id}`);
  // }

  // updateAwesome(id: number, value: any):Observable<any>{
  //   return this.http.put(`${environment.url}/${id}`, value);
  // }

  // addAwesome(awesome: any): Observable<any>{
  //   return this.http.post(`${environment.url}/`,awesome);
  // }
  // deleteAwesome(id: number): Observable<any>{
  //   return this.http.delete(`${environment.url}/${id}`);
  // }

}
