import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ActividadesPage } from '../pages/actividades/actividades';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { TPVPage } from '../pages/tpv/tpv';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DetalleActividadPage} from '../pages/detalle-actividad/detalle-actividad';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mis actividades', component: ActividadesPage },
      { title: 'TPV', component: TPVPage },
      { title: 'Cuenta', component: CuentaPage },
      {title:'LogIn', component:LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
