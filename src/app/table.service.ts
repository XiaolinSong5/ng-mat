import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserData} from '../user-data';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getData():Observable<UserData[]> {
    return this.http.get<UserData[]>(this.baseUrl);
  }
}
