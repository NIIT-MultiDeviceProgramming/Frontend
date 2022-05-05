import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-featured-products',
  templateUrl: './featured-products.component.html',
  styles: []
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {

  featuredProducts: Product[] = [];
  endSubs$ : Subject<any> = new Subject();

  constructor(private prodService : ProductsService) { }

  ngOnDestroy(): void {
      this.endSubs$.next(void 0);
      this.endSubs$.complete();
  }

  ngOnInit(): void {
    this._getFeaturedProducts()
  }

  private _getFeaturedProducts() {
    this.prodService.getFeaturedProducts(4).subscribe(products => {
      this.featuredProducts = products; 
    })
  }

}
