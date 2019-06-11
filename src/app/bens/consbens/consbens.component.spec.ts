import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsbensComponent } from './consbens.component';

describe('ConsbensComponent', () => {
  let component: ConsbensComponent;
  let fixture: ComponentFixture<ConsbensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsbensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsbensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
