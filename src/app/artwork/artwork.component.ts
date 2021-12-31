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
}
