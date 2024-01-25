import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpOverviewComponent } from './smtp-overview.component';

describe('SmtpOverviewComponent', () => {
  let component: SmtpOverviewComponent;
  let fixture: ComponentFixture<SmtpOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmtpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
