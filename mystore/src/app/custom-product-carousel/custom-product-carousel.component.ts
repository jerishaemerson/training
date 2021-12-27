import { Component, OnInit } from '@angular/core';
import { ProductService, CmsProductCarouselComponent as model, Product,} from '@spartacus/core';
import { CmsComponentData, ProductCarouselComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss']
})
export class CustomProductCarouselComponent extends ProductCarouselComponent implements OnInit {


  constructor(
    protected componentData: CmsComponentData<model>,
    protected productService: ProductService
  ) {
    super(componentData, productService)
  }
  ngOnInit(): void {
  }

}
