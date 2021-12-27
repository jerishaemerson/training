import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel.component';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomCarouselComponent
  ],
  imports: [
    CommonModule,RouterModule, IconModule, MediaModule, UrlModule
  ],
  exports: [CustomCarouselComponent],
  entryComponents: [CustomCarouselComponent]
})
export class CustomCarouselModule { }
