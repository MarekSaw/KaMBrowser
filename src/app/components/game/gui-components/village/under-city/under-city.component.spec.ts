import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderCityComponent } from './under-city.component';

describe('UnderCityComponent', () => {
  let component: UnderCityComponent;
  let fixture: ComponentFixture<UnderCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
