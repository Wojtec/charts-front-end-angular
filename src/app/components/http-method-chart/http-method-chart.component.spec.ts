import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMethodChartComponent } from './http-method-chart.component';

describe('HttpMethodChartComponent', () => {
  let component: HttpMethodChartComponent;
  let fixture: ComponentFixture<HttpMethodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpMethodChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMethodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
