import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
const myroute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
    path:"addtask",
    component:AddTaskComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    AddTaskComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
