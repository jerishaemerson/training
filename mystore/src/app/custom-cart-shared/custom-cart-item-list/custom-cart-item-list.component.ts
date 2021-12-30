import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActiveCartService, SelectiveCartService, UserIdService, MultiCartService } from '@spartacus/core';
import { CartItemListComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-cart-item-list',
  templateUrl: './custom-cart-item-list.component.html',
  styleUrls: ['./custom-cart-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCartItemListComponent extends CartItemListComponent implements OnInit {

  constructor(
    protected activeCartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService,
    protected userIdService: UserIdService,
    protected multiCartService: MultiCartService
  ) {
    super(activeCartService,selectiveCartService,userIdService,multiCartService)
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
