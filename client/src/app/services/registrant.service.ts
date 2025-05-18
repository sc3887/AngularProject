import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterantService {

  constructor(private http: HttpClient) { }
  getAllRegisterants(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/registerant');
  }
  getRegistrantById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/registerant/${id}`);
  }

  goBack(): void {
    window.history.back();
  }
 
}
