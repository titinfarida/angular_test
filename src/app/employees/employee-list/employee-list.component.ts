//employees/employee-list/employeelist.component.ts
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from "../employee.model"
import { EmployeeService } from "../employee.service"
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  employee = {
    id: null,
    userName: '',
    // firstName: '',
    // lastName: '',
    // email: '',
  }
  edit = true;
  add = false;
  employees: Employee[];

  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'email', 'Action'];//, 
  dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchText = ''
  constructor(private employeeService: EmployeeService, private _liveAnnouncer: LiveAnnouncer, private router: Router) { 
    
  }
  @ViewChild(MatSort) sort: MatSort;
  
  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: any){
    console.log(event.target.value);
    const value = event.target.value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees
      //this.dataSource = new MatTableDataSource<Employee>(employees);
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  goAddEmployee(){
    this.router.navigate(['addEmployee']);
  }
  goEmployeeDetail(employee: Employee){
    this.router.navigate(['employeeDetail/'+employee.id]);
  }

  // addEmployee() {
  //   const data = {
  //     id: this.employee.id,
  //     userName: this.employee.userName,
  //     // firstName: this.employee.firstName,
  //     // lastName: this.employee.lastName,
  //     // email: this.employee.email,
  //   };
  //   this.employeeService.createEmployee(data).subscribe(response => {
  //     console.log(response)
  //     this.getEmployees();
  //   });
  // }

  // setEmployeeEdit(employee: Employee) {
  //   this.employee.id = employee.id;
  //   this.employee.userName = employee.userName;
  //   this.edit = false;
  //   this.add = true;
  // }

  // resetValues() {    
  //   this.employee.id = null;
  //   this.employee.userName = "";
  //   this.edit = true;
  //   this.add = false;
  // }

  // removeEmployee(employee: Employee) {
  //   const id = employee.id;
  //   console.log(employee)
  //   this.employeeService.deleteEmployee(id).subscribe(employee => console.log(employee));
  //   this.getEmployees()
  // }

  // updateEmployee() {
  //   this.employeeService.editEmployee(this.employee).subscribe(response => console.log(response));
  //   this.getEmployees()
  //   this.resetValues()
  // }

  
}