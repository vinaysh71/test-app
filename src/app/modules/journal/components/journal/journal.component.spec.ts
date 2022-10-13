import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { JournalService } from '../../services/journal.service';

import { JournalComponent } from './journal.component';

fdescribe('JournalComponent', () => {
  let component: JournalComponent;
  let fixture: ComponentFixture<JournalComponent>;
  let journalService: JournalService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JournalComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    journalService = TestBed.inject(JournalService);
    fixture = TestBed.createComponent(JournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call subscribeToTestSubject()', () => {
    let val: any = true;
    // spyOn(val, 'subscribe').and.callThrough()
    spyOn(journalService, 'test$').and.returnValue(of(val))
    console.log('subject value is=========', val);
    // fixture.detectChanges();
    component.subscribeToTestSubject();
    expect(component.testSub).toEqual(val)
  })
});
