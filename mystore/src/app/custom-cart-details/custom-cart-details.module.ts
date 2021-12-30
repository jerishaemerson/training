import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartDetailsComponent } from './custom-cart-details.component';
import { ConfigModule, FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { CartCouponModule, CartSharedModule, PromotionsModule } from '@spartacus/storefront';
import { CustomCartSharedModule } from '../custom-cart-shared/custom-cart-shared.module';



@NgModule({
  declarations: [
    CustomCartDetailsComponent
  ],
  imports: [
    CommonModule,
    // CartSharedModule,
    CustomCartSharedModule,
    CartCouponModule,
    RouterModule,
    UrlModule,
    PromotionsModule,
    FeaturesConfigModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartDetailsComponent,
        },
      },
    })
  ],
  exports: [CustomCartDetailsComponent],
  entryComponents: [CustomCartDetailsComponent]
})
export class CustomCartDetailsModule { }
