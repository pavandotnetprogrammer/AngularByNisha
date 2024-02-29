import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationboardComponent } from './notificationboard.component';

describe('NotificationboardComponent', () => {
  let component: NotificationboardComponent;
  let fixture: ComponentFixture<NotificationboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
