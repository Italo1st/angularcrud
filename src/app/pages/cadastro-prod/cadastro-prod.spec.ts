import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProd } from './cadastro-prod';

describe('CadastroProd', () => {
  let component: CadastroProd;
  let fixture: ComponentFixture<CadastroProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroProd],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroProd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
