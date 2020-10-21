import { Component } from '@angular/core';

@Component({
  selector: 'app-main-organization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization {
  fullName = 'Полное имя';
  shortName = 'Сокращенное наименование';
  inn = 'ИНН';
  kpp = 'КПП';
  mainPerson = 'Учредитель(ФИО)';
  adress = 'Адрес';
  phone = 'Телефон';

  onClickAdd() {
    console.log('Добавляем');
  }

  onClickEdit() {
    console.log('Редактируем');
    this.fullName = 'Новое имя';
  }
}
