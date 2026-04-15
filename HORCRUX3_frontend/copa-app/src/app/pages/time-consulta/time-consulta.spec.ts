import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConsulta } from './time-consulta';

describe('TimeConsulta', () => {
  let component: TimeConsulta;
  let fixture: ComponentFixture<TimeConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeConsulta],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeConsulta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
