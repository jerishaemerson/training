import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { CarouselComponent, CarouselService } from '@spartacus/storefront';
import { interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent extends CarouselComponent implements OnInit
{
  interval = interval(5000);
  size: number;
  private subscription: Subscription;

  constructor(protected el: ElementRef, protected service: CarouselService, private cdr: ChangeDetectorRef) {
    super(el, service);
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.size$.subscribe((size) => {
      this.size = size;
    });

    this.subscription.add(
      this.interval.subscribe((data) => {
        this.activeSlide = this.activeSlide + this.size;
        if (this.activeSlide > this.items.length) {
          this.activeSlide = 0;
        }
      this.cdr.detectChanges();
      }
      )
    );
  }
}
