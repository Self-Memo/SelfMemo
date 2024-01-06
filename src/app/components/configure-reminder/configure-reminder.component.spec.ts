import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureReminderComponent } from './configure-reminder.component';

describe('ConfigureReminderComponent', () => {
  let component: ConfigureReminderComponent;
  let fixture: ComponentFixture<ConfigureReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
