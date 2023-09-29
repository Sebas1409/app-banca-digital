import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ImageInterface } from '../interfaces/image.interface';

@Component({
  selector: 'app-tab-register',
  templateUrl: 'tab-register.page.html',
  styleUrls: ['tab-register.page.scss']
})
export class TabRegisterPage implements OnInit {

  cameraFile: any;
  image: string = "";
  title!: string;
  showLoader: boolean = true;
  imageSelected?: ImageInterface;
  inicializater: string = "";
  showImg: boolean = true;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {

  }

  getImage(ev: any) {
    console.log(ev)

    this.cameraFile = ev;
  }

  async submit() {
    const loading = await this.loadingController.create(
      {
        cssClass: 'custom-loading'
      }
    );
    await loading.present();
    this.image = JSON.parse(JSON.stringify(this.inicializater))
    this.imageSelected = { image: JSON.parse(JSON.stringify(this.cameraFile.webPath)), text: JSON.parse(JSON.stringify(this.title)) }

    this.showImg = false;
    this.cameraFile = {};
    this.title = "";

    setTimeout(async() => {
      if (!this.image) {
        this.showImg = true;
        await loading.dismiss();
      }
    }, 100);


  }

  loadingStatus(status: any) {
    this.showLoader = status;
  }

  initialLoader() {
    this.showLoader = !this.showLoader;
  }

}
