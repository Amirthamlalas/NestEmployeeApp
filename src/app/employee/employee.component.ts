import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


 empcode=""
  email=""
  constructor(private api:ApiService,private route:Router){}
  readValue=()=>{
    let data:any={"empcode":this.empcode,"email":this.email}

    console.log(data)
    this.api.loginData(data).subscribe(
      (response:any)=>{
        let empid=response.empcode
        console.log(empid)
        localStorage.setItem("userinfo",empid)
        this.route.navigate(['/profile'])
      }
    )
  }
}
