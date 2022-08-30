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

  getArtistas(termino:string) {
    let url =
      `https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=US&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`;

    let headers = new HttpHeaders({
      'authorization':
        'Bearer BQD0ZKIhQUdBg1wuc8mYoLxFb9AA2wdv_9z5vp-mieo2nR9RgPdyr22bCaaF77nC_aDOwKY_KMo1NX0ohrsaf7SfX8p3-zp1m8rNrc6BDlXhc3DtQQQ',
    });

    return this.http.get(url, { headers }).pipe(map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas
    }));
  }
}
