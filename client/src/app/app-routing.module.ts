import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsArticleComponent } from './news-article/news-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:newsId', component: NewsArticleComponent },
  {path: 'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
