import { Component, OnInit } from '@angular/core';
import { ActiveCartService, SelectiveCartService, AuthService, RoutingService } from '@spartacus/core';
import { CartDetailsComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-cart-details',
  templateUrl: './custom-cart-details.component.html',
  styleUrls: ['./custom-cart-details.component.scss']
})
export class CustomCartDetailsComponent extends CartDetailsComponent implements OnInit {

  constructor(
    protected activeCartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService,
    protected authService: AuthService,
    protected routingService: RoutingService
  ) {
    super(activeCartService,selectiveCartService,authService,routingService)
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
