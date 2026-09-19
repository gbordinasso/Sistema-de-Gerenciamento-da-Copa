import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCadastro } from './jogo-cadastro';

describe('JogoCadastro', () => {
  let component: JogoCadastro;
  let fixture: ComponentFixture<JogoCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
