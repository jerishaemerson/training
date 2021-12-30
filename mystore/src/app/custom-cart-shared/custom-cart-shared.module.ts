import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartItemComponent } from './custom-cart-item/custom-cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlModule, I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { CartCouponModule, PromotionsModule, IconModule, MediaModule, ItemCounterModule, ModalModule, OutletModule } from '@spartacus/storefront';
import { CustomItemCounterModule } from '../shared/custom-item-counter/custom-item-counter.module';
import { CustomCartItemListComponent } from './custom-cart-item-list/custom-cart-item-list.component';



@NgModule({
  declarations: [
    CustomCartItemComponent,
    CustomCartItemListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartCouponModule,
    ReactiveFormsModule,
    UrlModule,
    NgbModule,
    PromotionsModule,
    I18nModule,
    IconModule,
    MediaModule,
    ItemCounterModule,
    CustomItemCounterModule,
    FeaturesConfigModule,
    ModalModule,
    OutletModule,
  ],
  exports: [CustomCartItemComponent, CustomCartItemListComponent],
  entryComponents: [CustomCartItemComponent, CustomCartItemListComponent]
})
export class CustomCartSharedModule { }
