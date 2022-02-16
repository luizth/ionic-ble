import { Component } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  devices: any[] = [];

  constructor(private ble: BLE) {}

  Scan(){
    this.devices = [];
  }
}
