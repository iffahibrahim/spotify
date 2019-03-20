import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQDp6jzyLqLhE9lBljUROJzTjKXr4QXZeoyLd3NV9P0E3JELSA1c5NCjd2mYZclyOHhEKHFStuisVWBPU7ViqOdNSl5xiCLjkasYCivhKp47NkAjsKydN2sm6mSgzFXozYQhhFkmk9vc4B85-fJbTMfWCO2KTuRr1NlMTg');

    return this.http.get(url, { headers });

  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = '&type=artist') {

    const param = '&offset=0&limit=20' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }

  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}
