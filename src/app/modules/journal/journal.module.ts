import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './components/journal/journal.component';
import { JournalRoutingModule } from './journal-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    JournalComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    MatCardModule
  ]
})
export class JournalModule { }
