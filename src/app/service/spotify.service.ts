import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http:HttpClient) { 
    console.log("Servicio activo!!")
  }

  getArtistas(){

    let url= "https://api.spotify.com/v1/search?query=metalica&type=artist&market=US&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20"

    this.http.get(url).subscribe(resp => console.log(resp))
  }
}
