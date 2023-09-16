import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { authGuard } from './Guard/auth.guard';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';

const routes: Routes = [
  {path: "", loadComponent:()=>import('./login/login.component').then(opt=> opt.LoginComponent)}, 
  {path:"home", component: HomeComponent, canActivate:[authGuard]}, 
  {path: "employees", component: EmployeeListComponent, canActivate:[authGuard]},
  {path: "addEmployee", component: AddEmployeeComponent, canActivate:[authGuard]},
  {path: "employeeDetail/:id", component: EmployeeDetailComponent, canActivate:[authGuard]},

  {path: "login", loadComponent:()=>import('./login/login.component').then(opt=> opt.LoginComponent)}, 
  {path: "**", component: StatusComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
