import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;


@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  closeResult: string;
  modalRef: any;
  jobDate: any;
  jobTime: any;
  jobName: any;
  schedulesList: any;

  constructor(private apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit() {
    this.apiservice.schedulesList().subscribe((res:any)=>{
  this.schedulesList=res.jobsList.jobs
  console.log( this.schedulesList,res.jobsList)
    })
  }
  formatDate(date){
    return new Date(date)
  }
  Cancel(){
    $("#myModal").css("display","none")
  }
  showaddNoteModal(){
   // alert("jhjhjhjh")
    //this.addNoteForm.reset()
    $("#myModal").css("display", "block");

   
  }
  ScheduleTask(){
    console.log(this.jobDate,this.jobTime,this.jobName)
    this.apiservice.createJob({name:this.jobName,date:this.jobDate,time:this.jobTime}).subscribe((res:any)=>{
console.log("res")
if(res.status==200){
  $("#myModal").css("display","none")
  this.toastr.success('scheduled task successfull')
}
else this.toastr.error(`${res.message}`)
    },(err)=>{
      this.toastr.error(`${err.message}`)
    })
  }
}
