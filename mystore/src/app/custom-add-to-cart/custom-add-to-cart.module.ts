import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAddToCartComponent } from './custom-add-to-cart.component';
import { CustomAddedToCartDialogComponent } from './custom-added-to-cart-dialog/custom-added-to-cart-dialog.component';
import { CmsConfig, ConfigModule, FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerModule, PromotionsModule, IconModule, ItemCounterModule, KeyboardFocusModule, ModalModule, CartSharedModule } from '@spartacus/storefront';
import { CustomCartSharedModule } from '../custom-cart-shared/custom-cart-shared.module';



@NgModule({
  declarations: [
    CustomAddToCartComponent,
    CustomAddedToCartDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CartSharedModule,
    CustomCartSharedModule,
    RouterModule,
    SpinnerModule,
    PromotionsModule,
    FeaturesConfigModule,
    UrlModule,
    IconModule,
    I18nModule,
    ItemCounterModule,
    KeyboardFocusModule,
    ModalModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductAddToCartComponent: {
          component: CustomAddToCartComponent,
          data: {
            inventoryDisplay: false,
          },
        },
      },
    }as CmsConfig)
  ],
  exports: [CustomAddToCartComponent, CustomAddedToCartDialogComponent]
})
export class CustomAddToCartModule { }
