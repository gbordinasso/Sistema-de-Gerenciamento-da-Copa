import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCadastro } from './time-cadastro';

describe('TimeCadastro', () => {
  let component: TimeCadastro;
  let fixture: ComponentFixture<TimeCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
