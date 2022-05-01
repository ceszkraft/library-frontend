import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewsModel } from 'src/app/models/news';
import { BASEURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  getNewsService(): Observable<NewsModel>{
    return this.http.get<NewsModel>(`${BASEURL.news}`).pipe()
  }
}
