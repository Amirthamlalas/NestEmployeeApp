import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {


  empid=""
  task=""

  readValue=()=>{
    let data:any={"empid":this.empid,"task":this.task}
    console.log(data);
  }
  
  
}
