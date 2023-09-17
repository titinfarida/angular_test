//employees/employee-list/employeelist.component.ts
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee } from "../employee.model"
import { EmployeeService } from "../employee.service"
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  employees: Employee[];

  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'email', 'Action'];
  dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  rowData: any = {};
  currentState: string = 'grid';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService, private _liveAnnouncer: LiveAnnouncer, private router: Router
    , private activatedRoute: ActivatedRoute
    , private location: Location) {

  }

  ngAfterViewInit(): void {
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

  applyFilter(event: any) {
    const value = event.target.value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  goAddEmployee() {
    this.currentState = 'add';
    const url = this
      .router
      .createUrlTree([this.router.url + '/add'], { relativeTo: this.activatedRoute })
      .toString();
    this.location.go(url)
  }

  goEmployeeDetail(employee: any) {
    if (!employee.delete) {
      this.currentState = 'detail';
      this.rowData = employee;
      const url = this
        .router
        .createUrlTree([this.router.url + '/' + this.rowData.id], { relativeTo: this.activatedRoute })
        .toString();
      this.location.go(url);
    }
  }
  dismissChildPage() {
    this.currentState = 'grid';
    const currentRoute = this.router.url;
    const url = this
      .router
      .createUrlTree([currentRoute], { relativeTo: this.activatedRoute })
      .toString();
    this.location.go(url);
  }
  createNewData(data: Employee) {
    this.employeeService.createEmployee(data).subscribe(response => {
      this.dataSource.data = [...this.dataSource.data, response]
      this.dismissChildPage()
    });
  }

}