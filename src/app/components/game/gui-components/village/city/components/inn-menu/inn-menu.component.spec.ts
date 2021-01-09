import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnMenuComponent } from './inn-menu.component';

describe('InnMenuComponent', () => {
  let component: InnMenuComponent;
  let fixture: ComponentFixture<InnMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
