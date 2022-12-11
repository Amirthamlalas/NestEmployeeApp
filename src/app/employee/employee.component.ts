import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  username=""
  password=""

  readValue=()=>{
    let data:any={"username":this.username,"password":this.password}
  }
}
