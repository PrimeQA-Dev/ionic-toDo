import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseLibComponent } from './firebase-lib.component';

describe('FirebaseLibComponent', () => {
  let component: FirebaseLibComponent;
  let fixture: ComponentFixture<FirebaseLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseLibComponent]
    });
    fixture = TestBed.createComponent(FirebaseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
