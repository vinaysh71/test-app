import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  journalsList$: any;
  testSub: boolean;

  constructor(
    private journalService: JournalService
  ) { }

  ngOnInit(): void {
    this.journalsList$ = this.journalService.getJournals();
    this.subscribeToTestSubject();
  }


  subscribeToTestSubject() {
    this.journalService.test$().subscribe(test => {

      this.testSub = test;
      console.log('the subject value is ', test)
    })
  }

}
