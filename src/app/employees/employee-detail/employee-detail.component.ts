import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input('dataInit')
  public data: any
  @Output('back')
  public OK: EventEmitter<any>= new EventEmitter<any>();

  gridIsHidden: boolean = false;
    
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute,){}
  
  ngOnInit(): void {
    if(!this.data){
      this.getEmployee();
    }

    const currentRoute = this.router.url;
    if(currentRoute == '/employees'){
      this.gridIsHidden = true;
    }
  }

  getEmployee(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.employeeService.getEmployee(id).subscribe(employee => {
      this.data = employee     
    });
  }

  okClicked(){    
    this.OK.emit(); 
  }

  redirectClicked(){
    this.router.navigate(['employees']); 
  }

  

}
