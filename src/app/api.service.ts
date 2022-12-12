import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addEmployee=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/addemployee",DataToSend)

  }
  addTask=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/addtask",DataToSend)

  }
  viewTask=()=>{
    return this.http.get("http://localhost:8080/viewtask")

  }

}
