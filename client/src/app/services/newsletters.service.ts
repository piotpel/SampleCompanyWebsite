import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NewsletterData } from '../models/NewsletterData';

@Injectable({
  providedIn: 'root'
})
export class NewslettersService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addNewsletter(newsletterData: any) {
    return this.http.post(this.baseUrl + 'newsletter/add-newsletter', newsletterData).subscribe(r => { });
  }
}
