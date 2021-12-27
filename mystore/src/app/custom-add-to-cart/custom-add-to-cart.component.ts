
import { ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { ActiveCartService} from '@spartacus/core';
import { AddToCartComponent, CmsComponentData, CurrentProductService, ModalService } from '@spartacus/storefront';
import { CustomAddedToCartDialogComponent } from './custom-added-to-cart-dialog/custom-added-to-cart-dialog.component';

@Component({
  selector: 'app-custom-add-to-cart',
  templateUrl: './custom-add-to-cart.component.html',
  styleUrls: ['./custom-add-to-cart.component.scss']
})
export class CustomAddToCartComponent extends AddToCartComponent implements OnInit {

  constructor(
    protected modalService: ModalService,
    protected currentProductService: CurrentProductService,
    protected cd: ChangeDetectorRef,
    protected activeCartService: ActiveCartService,
    // @Optional() protected component?: CmsComponentData<CmsAddToCartComponent>
  ) {
    super(modalService, currentProductService, cd, activeCartService)
  }

  ngOnInit(): void {
    super.ngOnInit()
  }
  protected openModal() {
    let modalInstance: any;
    this.modalRef = this.modalService.open(CustomAddedToCartDialogComponent, {
      centered: true,
      size: 'lg',
    });

    modalInstance = this.modalRef.componentInstance;
    // Display last entry for new product code. This always corresponds to
    // our new item, independently of whether merging occured or not
    modalInstance.entry$ = this.activeCartService.getLastEntry(
      this.productCode
    );
    modalInstance.cart$ = this.activeCartService.getActive();
    modalInstance.loaded$ = this.activeCartService.isStable();
    modalInstance.quantity = this.quantity;
    modalInstance.numberOfEntriesBeforeAdd = this.numberOfEntriesBeforeAdd;
  }
}
