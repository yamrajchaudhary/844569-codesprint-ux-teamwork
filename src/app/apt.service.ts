import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AptService {
  private baseUrl='http://localhost:3000/AptModel';
  constructor(private http:HttpClient) { }
  
  getAll():Observable<any>
  {   
    
      console.log("in service method");
      return this.http.get(`${this.baseUrl}`);
  }
 Insertdata(emp:Object) : Observable<any>
 {
   console.log("inserting data..."+JSON.stringify(emp));
    return this.http.post(`${this.baseUrl}`,emp);
  }
 

  
}
