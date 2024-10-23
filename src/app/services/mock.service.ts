import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private _http: HttpClient) { }

  public getEmployees(): Observable<any>{
    return this._http.get<Employee[]>('assets/fixtures/employees.json');
  }
}
