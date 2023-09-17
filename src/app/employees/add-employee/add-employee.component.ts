import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output('back')
  public cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output('done')
  public done: EventEmitter<any> = new EventEmitter<any>();
  @Output('save')
  public save: EventEmitter<any> = new EventEmitter<any>();


  gridIsHidden: boolean = false;

  constructor(private router: Router, private employeeService: EmployeeService) { }
  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute == '/employees') {
      this.gridIsHidden = true
    }
  }
  cancelClicked() {
    this.cancel.emit();
  }
  redirectClicked() {
    this.router.navigate(['employees']);
  }

  saveEmployee() {
    if (this.reactiveform.valid) {
      //console.log(this.reactiveform.value);
      let data: any = this.reactiveform.value
      data.id = null;

      if (this.gridIsHidden) {
        this.save.emit(data);
      }
      else {
        this.employeeService.createEmployee(data).subscribe(response => {
          this.redirectClicked()
        });
      }
    }

  }

  reactiveform = new FormGroup({
    userName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required, DateValidators.smallerThanToday()]),
    basicSalary: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  statusList: any[] = [
    { value: 'permanent', viewValue: 'Permanent' },
    { value: 'contract', viewValue: 'Contract' },
    { value: 'intern', viewValue: 'Internship' },
  ];

  groupList: any[] = [
    { value: 'Accounting Dept.', viewValue: 'Accounting Dept.' },
    { value: 'Planning Dept.', viewValue: 'Planning Dept.' },
    { value: 'Credit Service Dept.', viewValue: 'Credit Service Dept.' },
    { value: 'Deposit Service Dept.', viewValue: 'Deposit Service Dept.' },
    { value: 'E Banking Dept.', viewValue: 'E Banking Dept.' },
    { value: 'Finance Dept.', viewValue: 'Finance Dept.' },
    { value: 'Giro Dept.', viewValue: 'Giro Dept.' },
    { value: 'Human Resource Dept.', viewValue: 'Human Resource Dept.' },
    { value: 'Information and Technology Dept.', viewValue: 'Information and Technology Dept.' },
    { value: 'Risk Management Dept.', viewValue: 'Risk Management Dept.' },

  ];

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}

export class DateValidators {
  static smallerThanToday(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let theDate = new Date(control.value);
      let todayDateTime = new Date();
      let todaysDate = new Date((todayDateTime.getMonth() + 1) + '/' + todayDateTime.getDate() + '/' + todayDateTime.getFullYear())
      if (theDate > todaysDate) {
        return { smallerThan: true };
      }
      else {
        return null;
      }
    };
  }
}
