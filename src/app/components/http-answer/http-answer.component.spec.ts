import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAnswerComponent } from './http-answer.component';

describe('HttpAnswerComponent', () => {
  let component: HttpAnswerComponent;
  let fixture: ComponentFixture<HttpAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
