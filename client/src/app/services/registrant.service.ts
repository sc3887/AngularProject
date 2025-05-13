import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrantService {

  constructor(private http: HttpClient) { }
  getAllRegistrants(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/registerant');
  }
  getRegistrantById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/registerant/${id}`);
  }
 
}
