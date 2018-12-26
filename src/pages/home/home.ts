import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personnes: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPersonnes();
  }
  getPersonnes() {
    this.restProvider.getPersonnes()
      .then(data => {
        this.personnes = data;
        console.log(this.personnes);
      });
  }

}
