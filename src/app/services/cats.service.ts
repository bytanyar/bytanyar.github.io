import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

  
export class ApiCatService {  
  
    constructor(private httpClient: HttpClient) { }
    
  getCats(): Observable<any>{
    return this.httpClient.get('https://api.thecatapi.com/v1/images/search');
  }
}