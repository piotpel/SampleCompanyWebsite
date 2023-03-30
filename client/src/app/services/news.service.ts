import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl: string = environment.apiUrl;
  news: News[] = []; 

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<News[]>(this.apiUrl + 'news').pipe(
      map(news=> {
        this.news = news;
        return news;
      })
    )
  }

  getNewsById(id:number){
    const news = this.news.find(x => x.newsId == id);
    if (news) return of(news);
    return this.http.get(this.apiUrl + 'news/' + id);
  }
}
