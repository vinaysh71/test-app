import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FakeTestService } from './services/fake.test.service';
import { LoggerService } from './services/logger.service';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  navLinks: any[] = [];
  activeLinkIndex: number = -1;

  constructor(
    private logger: LoggerService,
    @Inject('APP_CONFIG') private config: any,
    @Inject(TestService) private testService: any,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.logger.log();
    console.log('config', this.config);
    this.testService.test();
  }

  ngOnInit() {
    this.navLinks = [
      {
        label: 'Journal',
        link: '/journal',
        index: 0
      }, {
        label: 'Works',
        link: '/works',
        index: 1
      }
    ];
  }

  createForm() {
    // this.router.navigate(['create'])
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
