import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { SliderComponent } from './slider/slider.component';

@NgModule({
    imports: [CommonModule, ButtonModule],
    declarations: [
      BannerComponent,
      SliderComponent
    ],
    exports: [
      BannerComponent,
      SliderComponent
    ]
})
export class UiModule {}
