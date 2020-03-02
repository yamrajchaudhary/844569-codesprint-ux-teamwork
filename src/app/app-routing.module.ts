import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [

  {path:'Home',component: HomeComponent},
  {path:'Place Appointment',component: PlaceappointmentComponent},
  {path:'View Appointment',component: ViewappointmentComponent},
  {path:'Contact Us',component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
