import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ImageInterface } from 'src/app/interfaces/image.interface';

@Component({
  selector: 'loading-img',
  templateUrl: './loading-img.component.html',
  styleUrls: ['./loading-img.component.scss'],
})
export class LoadingComponent implements OnChanges {


  @Input() showLoader: boolean = false;
  @Input() listImages?: ImageInterface;
  @Input() ruta?: string = '';
  @Output() sendLoadingStatus = new EventEmitter<boolean>();


  imagesAndTexts = [
    { image: 'assets/images/person-1.png', text: 'Texto 1' },
    { image: 'assets/images/person-2.png', text: 'Texto 2' },
    { image: 'assets/images/person-3.png', text: 'Texto 3' },
    { image: 'assets/images/person-4.png', text: 'Texto 4' },
    { image: 'assets/images/person-5.png', text: 'Texto 5' },

  ];
  currentIndex = 0;
  timeoutDuration = 5000; // Cambiar a la duración deseada en milisegundos
  timerId:any = null;
  public valorMax:boolean = false;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes?.['showLoader']){
      this.showLoader = changes?.['showLoader'].currentValue;
      if(this.showLoader){
        this.startLoader()
      }else{
        this.currentIndex == 0;
        this.timerId = null;
        this.stopTimer();
      }
    }
    if(changes?.['listImages'] && changes?.['listImages'].currentValue){
      this.imagesAndTexts.push(changes?.['listImages'].currentValue);
    }
  }

  ngOnInit() { }

  startLoader() {
    this.stopTimer();
    this.timerId = setInterval(() => {
      console.log(this.currentIndex+1)
      if (this.currentIndex < this.imagesAndTexts.length - 1) {
        this.currentIndex++;
      } else {
        // Cuando se alcanza el final, redirige a la ruta deseada
        this.showLoader = false;
        this.currentIndex = 0;
        this.sendLoadingStatus.emit(this.showLoader);

        if(!this.showLoader){
          this.stopTimer();
        }
        this.router.navigate([this.ruta]);
      }

    }, this.timeoutDuration);



  }



  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  maxImage(){
    this.valorMax = !this.valorMax;
  }

}
