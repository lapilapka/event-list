import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEventDialogComponent } from './remove-event-dialog.component';

describe('RemoveEventDialogComponent', () => {
  let component: RemoveEventDialogComponent;
  let fixture: ComponentFixture<RemoveEventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveEventDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
