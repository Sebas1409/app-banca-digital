import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'upload-img',
  templateUrl: './upload-img.page.html',
  styleUrls: ['./upload-img.page.scss'],
})
export class UploadImgPage implements OnInit, OnChanges {

  @Input() nombre:string='Upload Image';
  @Input() imageView?:string = "";
  @Output () cameraFile = new EventEmitter();
  //public imageView = 'assets/icon/image.png';


  public uploadFile:any;
  public valorMax:boolean = false;


  constructor(public router: Router, public actionSheetCtrl: ActionSheetController) { }


  ngOnChanges(changes: SimpleChanges) {
    if(changes?.['imageView'] && changes?.['imageView'].currentValue){
      this.imageView = changes?.['imageView'].currentValue
    }else{
      this.imageView = ""
    }
  }

  ngOnInit() {
  }

  async pickImage(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload Image from',
      buttons: [
        {
          text: 'Gallery',
          role: 'destructive',
          handler: () => {
            this.uploadImageGallery()
          }
        },
        {
          text: 'Camera',
          handler: () => {
            this.uploadImageCamera()
          }
        },
      ]
    });

    actionSheet.present();
  }

   // select image from Gallery
 async uploadImageGallery() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri, //CameraResultType.Base64
    source: CameraSource.Photos, // Camera, Photos or Prompt!
  });
   if (image) {
    console.log(image)
     this.imageView = '' + image.webPath;
     //this.imageView = 'data:image/jpeg;base64,' + image.base64String
     this.uploadFile = image;
     this.cameraFile.emit(this.uploadFile)
   }
}

// take a picture
async uploadImageCamera() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri, //CameraResultType.Base64
    source: CameraSource.Camera, // Camera, Photos or Prompt!
  });
   if (image) {
     //this.imageView = 'data:image/jpeg;base64,' + image.base64String
     this.imageView = '' + image.webPath
     this.uploadFile = image;
     this.cameraFile.emit(this.uploadFile)
   }
}

maxImage(){
  this.valorMax = !this.valorMax;
}

}
