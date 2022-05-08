import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { OrdersModule } from '@shoppe/orders';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { UiModule } from '@shoppe/ui';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'category/:categoryid',
    component: ProductsListComponent
  },
  {
    path: 'products/:productsid',
    component: ProductPageComponent
  }
]
@NgModule({
    imports: [
      CommonModule,
      OrdersModule, 
      RouterModule.forChild(routes), 
      ButtonModule, 
      CheckboxModule, 
      FormsModule,
      RatingModule,
      InputNumberModule,
      UiModule,
      BrowserModule
    ],
    declarations: [
      ProductsSearchComponent,
      CategoriesBannerComponent,
      ProductItemComponent,
      FeaturedProductsComponent,
      ProductsListComponent,
      ProductPageComponent,
    ],
    exports: [
      ProductsSearchComponent, 
      CategoriesBannerComponent, 
      ProductItemComponent, 
      FeaturedProductsComponent, 
      ProductsListComponent, 
      ProductPageComponent]
})
export class ProductsModule {}
