import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomItemCounterComponent } from './custom-item-counter.component';
import { I18nModule } from '@spartacus/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomItemCounterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    I18nModule
  ],
  exports: [CustomItemCounterComponent]
})
export class CustomItemCounterModule { }
