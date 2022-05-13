import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@shoppe/ui';
import {AccordionModule} from 'primeng/accordion';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsModule } from '@shoppe/products';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '@shoppe/orders';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UsersModule } from '@shoppe/users';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
  {path: '', component: HomePageComponent},
]


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule, 
    UiModule, 
    AccordionModule, 
    ProductsModule, 
    CommonModule,
    OrdersModule,
    ToastModule,
    UsersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgxStripeModule.forRoot('pk_test_51KxHonSAGofgKTlmt9UCDEUhtHqk4r9eHWEjoAH8g9QDusJcpmFB1CxkX53JptAcg2uKP6uo9fbl4Jkct5vOlewV00hOY8vyj7')
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
