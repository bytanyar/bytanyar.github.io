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

  constructor(public _catApiService: ApiCatService) { }

  ngOnInit(): void {
    this.getNewCat();
  }
  getNewCat() {
    this._catApiService.getCats().subscribe(
      data => {
        this.cats = data;
      }
    );
  }
}
