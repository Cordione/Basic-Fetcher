import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaggansComponent } from './quaggans.component';

describe('QuaggansComponent', () => {
  let component: QuaggansComponent;
  let fixture: ComponentFixture<QuaggansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuaggansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuaggansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
