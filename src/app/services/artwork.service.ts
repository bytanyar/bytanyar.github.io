import { Injectable } from '@angular/core';

import { Artwork } from '../classes/artwork';
import { DRAWINGS, PAINTINGS } from '../inputs/artwork';


@Injectable({
  providedIn: 'root'
})

export class ArtworkService {
  /** GET drawings from the file */
  getDrawings (): Artwork[] {
    return DRAWINGS;
  }

  /** GET paintings from the file */
  getPaintings (): Artwork[] {
    return PAINTINGS;
  }
  constructor() { }
}