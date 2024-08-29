import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiccionariosPage } from './diccionarios.page';

describe('DiccionariosPage', () => {
  let component: DiccionariosPage;
  let fixture: ComponentFixture<DiccionariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiccionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
