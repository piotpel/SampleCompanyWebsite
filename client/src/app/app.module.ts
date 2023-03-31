import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { ContactComponent } from './contact/contact.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AboutUsComponent } from './about-us/about-us.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { JobsComponent } from './jobs/jobs.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsArticleComponent,
    ContactComponent,
    AboutUsComponent,
    JobsComponent,
    CompanyServicesComponent,
    JobDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TabsModule.forRoot(),
    MdbCarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
