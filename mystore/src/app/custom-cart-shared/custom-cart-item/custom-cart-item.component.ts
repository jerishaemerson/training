import { Component, OnChanges, OnInit } from '@angular/core';
import { CartItemComponent, CartItemContext, CartItemContextSource } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-cart-item',
  templateUrl: './custom-cart-item.component.html',
  styleUrls: ['./custom-cart-item.component.scss'],
  providers: [
    CartItemContextSource,
    { provide: CartItemContext, useExisting: CartItemContextSource },
  ],
})
export class CustomCartItemComponent extends CartItemComponent implements OnChanges {

  // constructor(protected cartItemContextSource: CartItemContextSource) {
  //   super(cartItemContextSource);
  // }


  // ngOnInit(): void {
  // }

  // ngOnChanges(){
  //   super.ngOnChanges()
  // }
}
