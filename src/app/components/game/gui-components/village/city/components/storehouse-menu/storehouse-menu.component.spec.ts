import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehouseMenuComponent } from './storehouse-menu.component';

describe('StorehouseMenuComponent', () => {
  let component: StorehouseMenuComponent;
  let fixture: ComponentFixture<StorehouseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorehouseMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehouseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
