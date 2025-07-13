import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyIndexComponent } from './survey-index.component';

describe('SurveyIndexComponent', () => {
  let component: SurveyIndexComponent;
  let fixture: ComponentFixture<SurveyIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
