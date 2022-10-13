import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-research-dialog',
  templateUrl: './research-dialog.component.html',
  styleUrls: ['./research-dialog.component.scss']
})
export class ResearchDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('received popup data', this.dialogData);
  }

}
