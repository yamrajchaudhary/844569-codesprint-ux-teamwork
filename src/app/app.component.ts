import { Component } from '@angular/core';
import { AptModel } from './AptModel';
import { AptService } from './apt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitness';

//itemsmodel:AptModel[];
//items = new AptModel();
constructor(private dataservice:AptService)
{

}

//viewcome()
//{
 // console.log("in view");
 // this.dataservice.getAll().subscribe(itemsmodel=>this.itemsmodel=this.itemsmodel);
//}

// addcomp()
// {
//   console.log("data inserted");
// this.items.id=5;
// this.items.firstname="mahesh";
// this.items.lastname="reddy";
// this.items.password=12233;
// this.items.phonenumber=123456788;
// this.items.slot=1;
// this.items.state="andhra";
// this.items.street="df";
// this.items.trainerpreference="yes";
// this.items.city="gdsg";
// this.items.physio=null;
// this.items.zip=123;
// this.items.Quote=100;


//   this.dataservice.Insertdata(this.items).subscribe(itemsmodel=>this.itemsmodel=this.itemsmodel);
// }
}
