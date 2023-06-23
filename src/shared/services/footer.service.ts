import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUs } from 'src/app/interfaces/contact-us';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  contactUs(contact: ContactUs) {
    return this.http.post<any>(`${environment.baseURL}UserProfile/ContactUs`, contact);
  }
}
