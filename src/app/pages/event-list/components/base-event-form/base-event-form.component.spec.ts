import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEventFormComponent } from './base-event-form.component';

describe('BaseEventFormComponent', () => {
  let component: BaseEventFormComponent;
  let fixture: ComponentFixture<BaseEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseEventFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
