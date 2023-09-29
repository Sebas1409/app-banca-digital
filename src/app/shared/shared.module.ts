import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading-img/loading-img.component';


@NgModule({

  imports: [ CommonModule, IonicModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class SharedModule {}
