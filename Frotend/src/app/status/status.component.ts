import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  newdata:any
  
  restricted = true
  text:string = ""

  constructor(private student:StudentService) { }

  ngOnInit(): void {
  //   this.restricted = true
  // const id = localStorage.getItem("id") 
  // this.student.getID(id).subscribe((data)=>{
  //   console.log(data)
  //   this.newdata = JSON.parse(JSON.stringify(data))
  //   console.log(this.newdata)
  //   this.text = `Phone : ${this.newdata.phone} | Email : ${this.newdata.email} | Batch : ${this.newdata.batch}`
  //   if(this.newdata.status === 'Approved'){
  //     this.restricted = false
  //   }

  // })
  // }

}}
