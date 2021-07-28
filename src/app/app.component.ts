import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
   // private splashScreen: SplashScreen,
    //private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "/home",
        icon: "home-outline"
      },
      {
        title: "Info",
        url: "/info",
        icon: "information-outline"
      },
      {
        title: "Register",
        url: "/register",
        icon: "person-add-outline"
      },
      {
        title: "Login",
        url: "/login",
        icon: "person-circle-outline"
      },
      {
        title: "Reset Password",
        url: "/reset-password",
        icon: "refresh-outline"
      },
      {
        title: "Profile",
        url: "/profile",
        icon: "settings-outline"
      }
    ]
  }
}
