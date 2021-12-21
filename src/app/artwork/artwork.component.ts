import { Component, OnInit } from '@angular/core';
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

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.getArtwork();
  }
  
  getArtwork(): void {
    this.drawings = this.artworkService.getDrawings();
    this.paintings = this.artworkService.getPaintings();
  }
}
