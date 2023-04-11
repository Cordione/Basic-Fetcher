import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCraftingComponent } from './daily-crafting.component';

describe('DailyCraftingComponent', () => {
  let component: DailyCraftingComponent;
  let fixture: ComponentFixture<DailyCraftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCraftingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
