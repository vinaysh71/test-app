import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeTestService {

  constructor() { }

  public test() {
    console.log('this is fake');
  }
}
