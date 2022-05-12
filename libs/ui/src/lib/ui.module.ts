import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BannertwoComponent } from './components/bannertwo/bannertwo.component';

@NgModule({
    imports: [CommonModule, ButtonModule],
    declarations: [
      BannerComponent,
      GalleryComponent,
      BannertwoComponent
    ],
    exports: [
      BannerComponent,
      GalleryComponent,
      BannertwoComponent
    ]
})
export class UiModule {}
