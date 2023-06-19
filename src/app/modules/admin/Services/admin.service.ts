import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUser(search: any) {
    const payload = {
      search: search,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetAllUser`,
      payload
    );
  }

  getAllMission(search: any) {
    const payload = {
      search: search,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetAllMission`,
      payload
    );
  }
}
