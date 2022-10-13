import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './components/works/works.component';
import { MatCardModule } from '@angular/material/card';
import { AuthorsJoinPipe } from './pipes/authors-join.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ResearchDialogComponent } from './components/research-dialog/research-dialog.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    WorksComponent,
    AuthorsJoinPipe,
    ResearchDialogComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class WorksModule { }
