import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private API_ENDPOINT_ARTICLES = "https://api.plos.org/search?q=title:DNA";

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<any> {
    return this.http.get(this.API_ENDPOINT_ARTICLES);
  }
}
