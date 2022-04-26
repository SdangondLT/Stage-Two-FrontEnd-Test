import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<any> {
    const url = `${environment.URL}`;
    return this.http.get<any>(url);
  }
}
