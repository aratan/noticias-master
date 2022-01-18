import { Component, Input, OnInit } from '@angular/core';
import { DataRespuesta } from 'src/app/interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
//plugin
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { StorageService } from 'src/app/servicios/storage.service';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {


  @Input() l: DataRespuesta;
  @Input() index: number;

  constructor(
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
    private actionSheetControl: ActionSheetController,
    private storageService: StorageService
    ) { }

// codigo de la web
async presentActionSheet() {
  const actionSheet = await this.actionSheetControl.create({
    header: 'Opciones',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Borrar',
      role: 'destructive',
      icon: 'trash',
      id: 'delete-button',
      data: {
        type: 'delete'
      },
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Compartir',
      icon: 'share',
      data: 10,
      handler: () => {
        this.compartir();
      }
    }, {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle',
      data: 'Data value',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorito',
      icon: 'heart',
      handler: () => {
        this.favorito();
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();

  const { role, data } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role and data', role, data);
}


  ngOnInit() {}

  onOpenMenu() {
    this.presentActionSheet();
  }

  compartir(){
    const {nombre, resumen, url} = this.l;
    this.socialSharing.share  (
      nombre,
      resumen,
      null,
      url
    );
    console.log('Compartir clicked');
  }

  favorito(){
    this.storageService.guardaArticulo(this.l);
    console.log('Favorito clicked');
  }

  abreArticulo(){
    const browser = this.iab.create(this.l.url);
    browser.show();
    console.log('pulsaste en articulo');
  }

}
