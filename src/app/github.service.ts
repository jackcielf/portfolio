import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRepos(nick: string, page: number): Observable<any[]> {
    const perPage = 60; // Quantidade de repositórios listados por página
    const params = `?page=${page}&per_page=${perPage}`;

    return this.http.get<any[]>(`${this.apiUrl}/${nick}/repos${params}`);
  }
}
