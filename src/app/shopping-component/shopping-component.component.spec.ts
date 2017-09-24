import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingComponentComponent } from './shopping-component.component';

describe('ShoppingComponentComponent', () => {
  let component: ShoppingComponentComponent;
  let fixture: ComponentFixture<ShoppingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
