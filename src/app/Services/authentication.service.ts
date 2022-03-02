import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

interface EmbedUrl {
  embedUrl:string
}
interface Data{
  accessToken: string,
  embedUrl: Array<EmbedUrl>
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  fetchReport():Observable<Data>{
    console.log("here");
    const header = new HttpHeaders({
      'content-type': 'application/json',
    });
    return this.http.get<Data>('http://localhost:5300/getEmbedToken', { headers: header });
  }
}
