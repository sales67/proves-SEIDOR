import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsborrarComponent } from './esborrar.component';

describe('EsborrarComponent', () => {
  let component: EsborrarComponent;
  let fixture: ComponentFixture<EsborrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsborrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsborrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
