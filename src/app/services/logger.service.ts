import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) { }

  log() {
    console.log('test log');
  }

  checkEmails() {
    // Goto https://mocki.io/fake-json-api and create fake API with dummy value and change below url and with the following response format
    /**
     * [{"email":"test@test.com"},{"email":"test2@test.com"},{"email":"test3@test.com"}]
     */
    const url = 'https://mocki.io/v1/d9aacdfa-4b4b-41ff-bd03-d3c3950e287c'
    return this.http.get(url)
  }
}
