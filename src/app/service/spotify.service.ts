import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio activo!!');
  }

  getArtistas() {
    let url =
      'https://api.spotify.com/v1/search?query=metalica&type=artist&market=US&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20';

    let headers = new HttpHeaders({
      authorization:
        'Bearer BQBevgHkbTaEsTPD0Hlc-wRE5UqENk9Ixap-JT4lGX7T5sqoZ0NWUxuIEWjyzPPYnFczQOOGncIhtBGCbguofKZLVjYYS2aWO7tGzcuUHRi619tJuDA',
    });

    return this.http.get(url, { headers }).pipe(map((resp: any) => {
      this.artistas =  resp.artists.items;
      return this.artistas
    }));
  }
}
