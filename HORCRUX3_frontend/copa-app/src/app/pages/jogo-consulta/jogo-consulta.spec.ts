import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoConsulta } from './jogo-consulta';

describe('JogoConsulta', () => {
  let component: JogoConsulta;
  let fixture: ComponentFixture<JogoConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoConsulta],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoConsulta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
