import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'api/employees/';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.employeesUrl + id).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    employee.id = null;
    return this.http.post<Employee>(this.employeesUrl, employee).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.employeesUrl + id);
  }

 

}