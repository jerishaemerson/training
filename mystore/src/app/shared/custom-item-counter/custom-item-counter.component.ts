import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemCounterComponent } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-custom-item-counter',
  templateUrl: './custom-item-counter.component.html',
  styleUrls: ['./custom-item-counter.component.scss']
})
export class CustomItemCounterComponent extends ItemCounterComponent implements OnInit {

  public subs: Subscription;

  public quantity: number;
  ngOnInit(): void {
    this.subs = this.control.valueChanges
      .pipe(startWith(this.control.value))
      .subscribe((value) =>
        this.quantity = this.getValidCounts(value)
      );
  }
  public getValidCounts(value: number) {
    if (value < this.min && !(value === 0 && this.allowZero)) {
      value = this.min;
    }
    if (this.max && value > this.max) {
      value = this.max;
    }
    return value;
  }
}
