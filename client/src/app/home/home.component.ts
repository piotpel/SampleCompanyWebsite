import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import {ActivatedRoute } from '@angular/router'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news$: Observable<News[]> | undefined;
  apiUrl: string = environment.apiUrl;
  loading: boolean = true;

  constructor(private newsService: NewsService,
  private route:ActivatedRoute) { } //private access modifier enables treating variable as a class member

  ngOnInit(): void {
    this.news$ = this.newsService.getNews();
    this.loading = false;
  }

}
