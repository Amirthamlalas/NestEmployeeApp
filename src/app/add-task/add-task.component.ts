import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {


  empcode=""
  task=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"empid":this.empcode,"task":this.task}
    console.log(data);
    this.api.addTask(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("task added successfully")
          
        } else {
          alert("something went wrong")
        }
      }
    )
  }
  
  
}
