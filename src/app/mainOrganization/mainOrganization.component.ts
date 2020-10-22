import { Component, Input, OnInit } from '@angular/core';
import MainOrganizationInterface from '../interfaces/MainOrganizationInterface';
import FilialInterface from '../interfaces/FilialInterface';
import { OPEN, CLOSE } from '../store/constants/constants';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-organization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization implements OnInit {
  @Input() mainCard: MainOrganizationInterface[]; // Прокидываем карточки с главного компонента

  isOpen$: Observable<any>;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store
      .select('isOpen')
      .subscribe((data) => (this.isOpen$ = data));
  }

  filialOrganization: FilialInterface[] = [
    {
      adress: 'Адрес',
      mainPerson: 'Должностное лицо',
      phone: 'Телефон',
    },
    {
      adress: '1',
      mainPerson: 'Должностное лицо',
      phone: 'Телефон',
    },
    {
      adress: '2',
      mainPerson: 'Должностное лицо',
      phone: 'Телефон',
    },
    {
      adress: '3',
      mainPerson: 'Должностное лицо',
      phone: 'Телефон',
    },
  ];

  handleClickAdd = () => {
    this.store.dispatch({ type: CLOSE });
  };

  handleClickEdit = () => {
    this.store.dispatch({ type: OPEN });
  };
}
