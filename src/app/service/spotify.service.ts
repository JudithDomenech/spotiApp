import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string =
    'BQCjXAb4oVumspTdVaRrBzwfUjeleTgAygHD13HHZ6XZs9mjk1-OiFaiftDOJxF79JJLq99QVMVatljjvqSQedg85bvpwJs-ko6ojVUP6CA4D3ZDqOo';

  constructor(public http: HttpClient) {
    console.log('Servicio activo!!');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token,
    });
    return headers;
  }

  getArtista(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
    //   .pipe(map((resp: any) => {
    //   this.artistas = resp.artists.items;
    //   return this.artistas
    // }))
  }

  getArtistas(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&market=US&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }).pipe(
      map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      })
    );
  }
}
