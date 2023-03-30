import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsArticleComponent } from './news-article/news-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:newsId', component: NewsArticleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
