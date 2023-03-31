import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsArticleComponent } from './news-article/news-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:newsId', component: NewsArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'services', component: CompanyServicesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
