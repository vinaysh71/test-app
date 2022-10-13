import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const URL = 'https://api.core.ac.uk';
let PATH = 'v3/search/{entityType}/'

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(
    private http: HttpClient
  ) { }

  getWorks() {
    PATH = PATH.replace("{entityType}", 'works');
    const api = `${URL}/${PATH}`;
    return this.http.get(api).pipe(map((data: any) => data.results))
  }
}
