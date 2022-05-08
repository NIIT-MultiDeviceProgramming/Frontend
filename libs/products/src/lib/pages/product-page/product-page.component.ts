import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem, CartService } from '@shoppe/orders';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product = new Product;
  //product: Product = new Product;
  endSubs$: Subject<any> = new Subject();
  quantity = 1;

  constructor(private prodService: ProductsService, private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      console.log(params);
      //console.log(this.product.name);
      //console.log(params['productsid']);
      if (params['productsid']) {
        this._getProduct(params['productsid']);
        console.log(params['productsid']);
      }
    });
  }

  
  ngOnDestroy(): void {
    this.endSubs$.next(void 0);
    this.endSubs$.complete();
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };

    this.cartService.setCartItem(cartItem);
  }

  private _getProduct(id: string) {
    this.prodService
      .getProduct(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((resProduct) => {
        this.product = resProduct;
      });
  }
}