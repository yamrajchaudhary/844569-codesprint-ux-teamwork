import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import {  HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AptService } from './apt.service';
@NgModule({
  declarations: [
    AppComponent,
    PlaceappointmentComponent,
    ViewappointmentComponent,
    NavbarComponent,
    HomeComponent,
    ContactusComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AptService],
  bootstrap: [AppComponent,FormsModule]
})
export class AppModule { }
