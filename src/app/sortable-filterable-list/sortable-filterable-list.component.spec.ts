import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableFilterableListComponent } from './sortable-filterable-list.component';

describe('SortableFilterableListComponent', () => {
  let component: SortableFilterableListComponent;
  let fixture: ComponentFixture<SortableFilterableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortableFilterableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortableFilterableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
