import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

const URL = 'https://api.core.ac.uk';
let PATH = 'v3/search/{entityType}/'

@Injectable({
  providedIn: 'root'
})

export class JournalService {

  private test = new BehaviorSubject<boolean>(true);
  public test$(): Observable<boolean> {
    return this.test.asObservable()
  }

  constructor(private http: HttpClient) { }

  getJournals() {
    PATH = PATH.replace("{entityType}", 'journals');
    const api = `${URL}/${PATH}`;
    return this.http.get(api).pipe(map((data: any) => data.results))
  }

  testChange(val: boolean) {
    this.test.next(val);
  }


}
