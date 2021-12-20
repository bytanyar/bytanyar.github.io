import { Component, OnInit } from '@angular/core';
import { ApiCatService } from '../services/cats.service';
import { Cat } from '../classes/cat';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})


export class CatsComponent implements OnInit {

  cats: Cat[] = [];
  loading: boolean = false;
  errorMessage;

  constructor(public _catApiService: ApiCatService) { }

  ngOnInit(): void {
    this.getNewCat();
  }
  getNewCat() {
    this._catApiService.getCats()
    .subscribe(
      data => {
        console.log('response received');
        this.cats = data;
      },
      error => {                              //error() callback
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.log('Request completed');
        this.loading = false; 
      }
    )
  }
}
