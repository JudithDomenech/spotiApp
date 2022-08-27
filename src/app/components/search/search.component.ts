import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public _spotify: SpotifyService) { 
    this._spotify.getArtistas()
  }

  ngOnInit(): void {
  }

}