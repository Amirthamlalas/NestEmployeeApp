import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  empid:any=""
profile:any=[]

  constructor(private api:ApiService){

    this.empid=localStorage.getItem("userinfo")
    let data:any={
        "empid":this.empid
    }
    this.api.viewProfile(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.profile=response;
      }
    )
  }

}
