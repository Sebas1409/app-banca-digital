import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabRegisterPage } from './tab-register.page';

import { TabRegisterPageRoutingModule } from './tab-register-routing.module';
import { UploadImgPageModule } from '../shared/upload-img/upload-img.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,HttpClientModule,
    TabRegisterPageRoutingModule,UploadImgPageModule,SharedModule
  ],
  declarations: [TabRegisterPage]
})
export class TabRegisterPageModule {}
