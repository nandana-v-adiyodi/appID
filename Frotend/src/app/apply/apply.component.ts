import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  url: any = ""
  array:any
  courses:any
  batches:any
   
  
 
  data ={
   
    name:"",
    email:"",
    phone:"",
    photo:"",
    course:"",
    batch:"",
    startDate:"",
    endDate:""
    
}

constructor(private student:StudentService , private route:Router) { }


  ngOnInit(): void {
    AOS.init();
    this.student.getCourses().subscribe((data)=>{
      this.array = JSON.parse(JSON.stringify(data))
      this.courses = this.array[0].course
      this.batches = this.array[0].batch
      console.log(this.batches[0])
    })
  }


  Register(){

    this.student.Register({ data: this.data}).subscribe((data: any)=>{
      if(data != null) {
              alert("Your application is submitted Successfully")
             
           }
            else {
             alert("Error")
        
           }
           this.route.navigate(["/"])
           
           
           })
          
  
  }
  
    
 }


