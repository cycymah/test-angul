import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import MainOrganizationInterface from './interfaces/MainOrganizationInterface';
import { GET } from './store/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  autorizationForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  dataCards$: Observable<any>;
  subscribeData$: any;

  constructor(private store: Store<any>) {
    this.dataCards$ = this.store.select('organizationData');
    this.subscribeData$ = this.dataCards$.subscribe(
      (data) => (this.subscribeData$ = data)
    );
  }

  // ngOnInit() {
  //   console.log(this.subscribeData$);
  // }

  handleSubmit = () => {
    const { password, login } = this.autorizationForm.value;
    // event.prevenetDefault();
    console.log(password, login);
    const info = this.store.dispatch({ type: GET });
    console.log(event);
  };
}
