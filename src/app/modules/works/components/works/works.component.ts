import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { tap } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { ResearchDialogComponent } from '../research-dialog/research-dialog.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  worksList$: any;

  constructor(
    private worksService: WorksService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.worksList$ = this.worksService.getWorks().pipe(tap(console.log))
  }

  openDialog(value: string, work: any) {
    console.log('value is ', value);
    const dialogRef = this.dialog.open(ResearchDialogComponent, {
      data: {
        type: value,
        content: {
          title: work.title,
          data: value == 'abstract' ? work.abstract : work.fullText,
          downloadUrl: work.downloadUrl
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
