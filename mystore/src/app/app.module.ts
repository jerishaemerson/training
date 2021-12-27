import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAddToCartModule } from "./custom-add-to-cart/custom-add-to-cart.module";
import { CustomProductCarouselModule } from "./custom-product-carousel/custom-product-carousel.module";
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomProductCarouselModule,
    CustomAddToCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
