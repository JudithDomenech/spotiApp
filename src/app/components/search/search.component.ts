import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  termino: string = '';

  constructor(public _spotify: SpotifyService) {}

  buscarArtistas() {
    if (this.termino.length == 0) {
      return;
    }
    this._spotify.getArtistas(this.termino).subscribe();
  }
}
