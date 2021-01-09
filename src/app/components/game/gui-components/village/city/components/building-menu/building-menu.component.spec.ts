import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingMenuComponent } from './building-menu.component';

describe('BuildingMenuComponent', () => {
  let component: BuildingMenuComponent;
  let fixture: ComponentFixture<BuildingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
