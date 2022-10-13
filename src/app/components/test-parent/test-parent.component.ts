import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss']
})
export class TestParentComponent implements OnInit, AfterContentInit {

  @ContentChild('tester') test: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('content test', this.test);
  }

}
