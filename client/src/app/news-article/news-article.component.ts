import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {
  news: News | undefined |any;
  errorMessage: string = "There was a problem retrieving data for this article";
  currentArticleData: News|undefined;

  constructor(private route: ActivatedRoute,
private newsService: NewsService  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const newsId = Number(this.route.snapshot.paramMap.get('newsId'));
    if (!newsId) { return; }
    this.newsService.getNewsById(newsId).subscribe({
      next: news => this.news = news
    })
  }
}
