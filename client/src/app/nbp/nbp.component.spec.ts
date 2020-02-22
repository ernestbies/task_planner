import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpComponent } from './nbp.component';

describe('NbpComponent', () => {
  let component: NbpComponent;
  let fixture: ComponentFixture<NbpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
