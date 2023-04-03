import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsletterData } from '../models/NewsletterData';
import { NewslettersService } from '../services/newsletters.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  newsletterData: NewsletterData = {firstName:'', email:''}
  newsletterForm: FormGroup = new FormGroup({});
  model: any = {};

  constructor(private newsletterService:NewslettersService) { }

  ngOnInit(): void {
    this.initializeNewsletterForm();
  }

  initializeNewsletterForm(){
    this.newsletterForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  insertNewsletter(newsletterFormData: any) {
    //TODO: Check if newsletter email is already in database
    this.newsletterService.addNewsletter(newsletterFormData);
    console.log("newsletter sent to the database");
  }

}
