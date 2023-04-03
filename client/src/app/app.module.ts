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
import { FaqComponent } from './faq/faq.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TabsModule.forRoot(),
    MdbCarouselModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
