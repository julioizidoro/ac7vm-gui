import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsuclienteComponent } from './consucliente.component';

describe('ConsuclienteComponent', () => {
  let component: ConsuclienteComponent;
  let fixture: ComponentFixture<ConsuclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsuclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsuclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
