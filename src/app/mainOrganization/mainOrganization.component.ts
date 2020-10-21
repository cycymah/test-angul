import { Component } from '@angular/core';

@Component({
  selector: 'app-mainOrganization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization {
  fullName = 'Полное';
  shortName = 'Сокращенное наименование';
  inn = 'ИНН';
  kpp = 'КПП';
  mainPerson = 'Учредитель(ФИО)';
  adress = 'Адрес';
  phone = 'Телефон';
}
