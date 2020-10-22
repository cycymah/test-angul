import { Component, ViewChild } from '@angular/core';
import MainOrganizationInterface from './interfaces/MainOrganizationInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // isPopupFormMainOpen = false;
  // @ViewChild(MainOrganization) viewChild: MainOrganization;

  mainOrganizations: MainOrganizationInterface[] = [
    {
      fullName: 'ФЫафывафыв',
      shortName: 'ЬЛО',
      inn: '237289043875',
      kpp: '12341234',
      mainPerson: 'Брых',
      adress: 'Адрес',
      phone: 'Телефон',
    },
    {
      fullName: 'ываф',
      shortName: 'ыва',
      inn: '2341234',
      kpp: '234',
      mainPerson: 'ва',
      adress: 'ыва',
      phone: 'ыва',
    },
    {
      fullName: 'ываф',
      shortName: 'ыва',
      inn: '!!!!!',
      kpp: '234',
      mainPerson: 'ва',
      adress: 'ыва',
      phone: 'ыва',
    },
  ];
}
