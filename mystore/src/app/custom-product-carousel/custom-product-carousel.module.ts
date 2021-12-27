import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductCarouselComponent } from './custom-product-carousel.component';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { CustomCarouselModule } from '../shared/custom-carousel/custom-carousel.module';



@NgModule({
  declarations: [
    CustomProductCarouselComponent
  ],
  imports: [
    CommonModule,
    // CarouselModule,
    CustomCarouselModule,
    MediaModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        },
      },
    }as CmsConfig)
  ],
  exports: [CustomProductCarouselComponent],
  entryComponents: [CustomProductCarouselComponent]
})
export class CustomProductCarouselModule { }
