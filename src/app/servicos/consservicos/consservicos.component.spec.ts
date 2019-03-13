import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsServicosComponent } from './consservicos.component';

describe('ConsuclienteComponent', () => {
  let component: ConsServicosComponent;
  let fixture: ComponentFixture<ConsServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
