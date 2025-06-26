import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicEventFormComponent } from './music-event-form.component';

describe('MusicEventFormComponent', () => {
  let component: MusicEventFormComponent;
  let fixture: ComponentFixture<MusicEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicEventFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
