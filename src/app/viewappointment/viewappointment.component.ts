import { Component, OnInit } from '@angular/core';
import { AptService } from '../apt.service';
import { AptModel } from '../AptModel';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {



  apt: AptModel[];
  constructor( private appoinment:AptService) { }

  ngOnInit(): void {
    this.appoinment.getAll().subscribe(apt=>this.apt=apt);console.log("assd");
  }




}
