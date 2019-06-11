import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadbensComponent } from './cadbens.component';

describe('CadbensComponent', () => {
  let component: CadbensComponent;
  let fixture: ComponentFixture<CadbensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadbensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadbensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
