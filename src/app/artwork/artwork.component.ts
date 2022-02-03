import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Artwork } from '../classes/artwork';
import { ArtworkService } from '../services/artwork.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  drawings: Artwork[] =[];
  paintings: Artwork[] =[];
  selectedDrawing = 0;
  imageMove = 0;
  prevIcon = 0;
  public selectedindex: number = 0;
  
  constructor(
    private artworkService: ArtworkService,
    @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit(): void {
    this.getArtwork();
  }
  
  getArtwork(): void {
    this.drawings = this.artworkService.getDrawings();
    this.paintings = this.artworkService.getPaintings();
  }
  showArtwork(id): void {
    let thumbs = this.document.getElementsByClassName('thumb-container');
    for(let i = 0; i < thumbs.length; i++){
      this.document.getElementById(this.drawings[i].specificId + '-thumb').style.display = "none";
    }
    this.document.getElementById(id).classList.add('show');
  }
  hideArtwork(id): void {
    let thumbs = this.document.getElementsByClassName('thumb-container');
    for(let j = 0; j < thumbs.length; j++){
      this.document.getElementById(this.drawings[j].specificId + '-thumb').style.display = "block";
    }
    this.document.getElementById(id).classList.remove('show');
    
  }

  selectDrawing(index: number) {
    this.selectedindex = index;
  }
  prevDrawing(): void {
    if(this.selectedDrawing == 0){
      this.selectedDrawing = this.drawings.length;
      this.imageMove = this.selectedDrawing * 160;
      this.document.getElementById('images').style.left = this.imageMove + 'px';
    } else {
      this.selectedDrawing--;
      this.imageMove = this.selectedDrawing * 160;
      this.document.getElementById('images').style.left = this.imageMove + 'px';
    }
    console.log('prev:', this.imageMove);
  }
  nextDrawing(): void {
    if(this.selectedDrawing == this.drawings.length){
      this.selectedDrawing = 0;
      this.imageMove = 0;
      this.document.getElementById('images').style.left = this.imageMove + 'px';
    } else {
      this.selectedDrawing++;
      this.imageMove = this.selectedDrawing * -160;
      this.document.getElementById('images').style.left = this.imageMove + 'px';
    }
    console.log('next:', this.imageMove);
  }
}
