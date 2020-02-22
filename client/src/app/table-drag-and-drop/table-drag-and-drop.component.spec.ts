import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDragAndDropComponent } from './table-drag-and-drop.component';

describe('TableDragAndDropComponent', () => {
  let component: TableDragAndDropComponent;
  let fixture: ComponentFixture<TableDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
