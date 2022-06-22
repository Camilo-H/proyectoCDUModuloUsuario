import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEscenariosComponent } from './gestionar-escenarios.component';

describe('GestionarEscenariosComponent', () => {
  let component: GestionarEscenariosComponent;
  let fixture: ComponentFixture<GestionarEscenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarEscenariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEscenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
