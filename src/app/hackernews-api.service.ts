import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  // fetchStories(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/topstories.json`);
  // }

  /**
   * @param storyType Show different types of stories depending where the user navigates to
   * @param page Page number
   */
  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`);
  }

  // Subscription for each item to show their details
  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`);
  }
}
