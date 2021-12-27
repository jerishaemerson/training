import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomItemCounterComponent } from './custom-item-counter.component';

describe('CustomItemCounterComponent', () => {
  let component: CustomItemCounterComponent;
  let fixture: ComponentFixture<CustomItemCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomItemCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomItemCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
