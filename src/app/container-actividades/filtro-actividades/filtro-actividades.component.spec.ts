import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroActividadesComponent } from './filtro-actividades.component';

describe('FiltroActividadesComponent', () => {
  let component: FiltroActividadesComponent;
  let fixture: ComponentFixture<FiltroActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroActividadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
