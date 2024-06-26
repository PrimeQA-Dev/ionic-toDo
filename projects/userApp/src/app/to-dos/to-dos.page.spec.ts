import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDosPage } from './to-dos.page';

describe('ToDosPage', () => {
  let component: ToDosPage;
  let fixture: ComponentFixture<ToDosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
