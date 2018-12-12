import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsScrollComponent } from './products-scroll.component';

describe('ProductsScrollComponent', () => {
  let component: ProductsScrollComponent;
  let fixture: ComponentFixture<ProductsScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
