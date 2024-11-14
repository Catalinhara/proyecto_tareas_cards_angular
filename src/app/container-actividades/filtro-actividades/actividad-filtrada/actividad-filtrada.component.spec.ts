import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFiltradaComponent } from './actividad-filtrada.component';

describe('ActividadFiltradaComponent', () => {
  let component: ActividadFiltradaComponent;
  let fixture: ComponentFixture<ActividadFiltradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadFiltradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadFiltradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
