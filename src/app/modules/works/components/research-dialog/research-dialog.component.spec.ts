import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDialogComponent } from './research-dialog.component';

describe('ResearchDialogComponent', () => {
  let component: ResearchDialogComponent;
  let fixture: ComponentFixture<ResearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
