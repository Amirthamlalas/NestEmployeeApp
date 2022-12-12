import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
name=""
designation=""
email=""
phoneno=""
empcode=""
salary=""
constructor(private api:ApiService){}
readValue=()=>{
  let data:any={
    "name":this.name,"designation":this.designation,"email":this.email,"phoneno":this.phoneno,"empcode":this.empcode,"salary":this.salary
  }
  this.api.addEmployee(data).subscribe(
    (response:any)=>{
if (response.status=="success") {
  alert("employee added successfully")
  
} else {
  alert("something went wrong")
  
}


    }
  )

}
}
