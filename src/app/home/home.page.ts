import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  devices: any[] = [
    {
      'name': 'Luiz Device',
      'id': '502b2aaf-5b70-41b5-9a97-8ed0b065cc5c',
      'rsii': 45
    }
  ];

  constructor() {}

}
