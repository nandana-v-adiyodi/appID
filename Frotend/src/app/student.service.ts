import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  server_address = 'api'

constructor(private http: HttpClient) { }


  Register(data:any){
  
    console.log(data.data.name)
    return this.http.post<any>("http://localhost:5000/register",data)
  }
   getID(id:any){
     return this.http.get<any>("http://localhost:5000/idcard/:id"+id)
  }

 getCourses(){
    return this.http.get("http://localhost:5000/courses")
  }
  gettoken(){
       return localStorage.getItem("token")
    }

}
