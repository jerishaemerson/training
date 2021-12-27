import { Component, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { AddedToCartDialogComponent, ModalService } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-added-to-cart-dialog',
  templateUrl: './custom-added-to-cart-dialog.component.html',
  styleUrls: ['./custom-added-to-cart-dialog.component.scss']
})
export class CustomAddedToCartDialogComponent extends AddedToCartDialogComponent implements OnInit {

  constructor(
    protected modalService: ModalService,
    protected cartService: ActiveCartService
  ) {
    super(modalService, cartService)
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
