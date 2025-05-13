import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) { }


  getAllStaff(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/staff');
  }
  getStaffById(idNumber: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/staff/${idNumber}`);
  }

  checkUserExists(fullName: string,  password: string):Observable<{success: boolean, role: string}> {
    const body = {fullName, password};
    return this.http.post<{success: boolean, role: string}>(`http://localhost:3000/api/staff/login/`, body)
  }

}

