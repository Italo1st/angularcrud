import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaEscolhaAdmin } from './tela-escolha-admin';

describe('TelaEscolhaAdmin', () => {
  let component: TelaEscolhaAdmin;
  let fixture: ComponentFixture<TelaEscolhaAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaEscolhaAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaEscolhaAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
