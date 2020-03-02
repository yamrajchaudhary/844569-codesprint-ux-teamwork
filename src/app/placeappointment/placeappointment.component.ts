import { Component, OnInit } from '@angular/core';
import { AptService } from '../apt.service';
import { AptModel } from '../AptModel';

@Component({
  selector: 'app-placeappointment',
  templateUrl: './placeappointment.component.html',
  styleUrls: ['./placeappointment.component.css']
})
export class PlaceappointmentComponent implements OnInit {

 aptmodel= new AptModel();

 // aptmodel:AptModel;
  constructor(private placeapppointment:AptService) { }

  ngOnInit(): void {
  }

  createappoinment()
  {
    console.log("data inserted");
   // this.aptmodel.id=5;
    this.placeapppointment.Insertdata(this.aptmodel).subscribe(aptmodel=>{alert("your details are saved successfully .")});

  }

}
