import { Component } from '@angular/core';

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

readValue=()=>{
  let data:any={
    "name":this.name,"designation":this.designation,"email":this.email,"phoneno":this.phoneno
  }

}
}
