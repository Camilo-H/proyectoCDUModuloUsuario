import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMasNoticiasComponent } from './home-mas-noticias.component';

describe('HomeMasNoticiasComponent', () => {
  let component: HomeMasNoticiasComponent;
  let fixture: ComponentFixture<HomeMasNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMasNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMasNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
