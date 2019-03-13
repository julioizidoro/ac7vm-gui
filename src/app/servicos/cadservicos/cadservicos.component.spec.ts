import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadServicosComponent } from './cadservicos.component';

describe('CadclienteComponent', () => {
  let component: CadServicosComponent;
  let fixture: ComponentFixture<CadServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
