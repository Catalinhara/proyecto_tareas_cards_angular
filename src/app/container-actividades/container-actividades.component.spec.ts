import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerActividadesComponent } from './container-actividades.component';

describe('ContainerActividadesComponent', () => {
  let component: ContainerActividadesComponent;
  let fixture: ComponentFixture<ContainerActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerActividadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
