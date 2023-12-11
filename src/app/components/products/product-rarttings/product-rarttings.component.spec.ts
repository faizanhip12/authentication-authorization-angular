import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRarttingsComponent } from './product-rarttings.component';

describe('ProductRarttingsComponent', () => {
  let component: ProductRarttingsComponent;
  let fixture: ComponentFixture<ProductRarttingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRarttingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRarttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
