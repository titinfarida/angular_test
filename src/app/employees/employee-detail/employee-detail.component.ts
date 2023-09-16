import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute,){}

  data: Employee
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.employeeService.getEmployee(id).subscribe(employee => {
      this.data = employee
      console.log(employee)      
    });
  }

  redirectEmployeeList() {
    this.router.navigate(['employees']);
  }
  goPreviousPage(){
    this.redirectEmployeeList();
  }

}
