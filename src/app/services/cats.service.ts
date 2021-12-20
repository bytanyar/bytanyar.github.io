import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Cat } from '../classes/cat';

@Injectable({
    providedIn: 'root'
})

  
export class ApiCatService {
  httpHeaders: {'x-api-key': `84045bbd-b25f-4a21-9ad8-46b7acaa293f`};
  response;

  constructor(private httpClient: HttpClient) { }
    
  getCats(): Observable<any>{
    return this.httpClient.get('https://api.thecatapi.com/v1/images/search', {
      headers: this.httpHeaders,
      observe: this.response
    });
  }
}