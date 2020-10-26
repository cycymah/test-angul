import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { v1 as uuidv1 } from 'uuid';
import {
  ClosePopups,
  AddOrganization,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class PopupFormMain {
  storeData$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.storeData$ = this.store.select('reducer');
    this.subscribeData = this.storeData$.subscribe(
      (data) => (this.subscribeData = data)
    );
  }

  organizationForm = new FormGroup({
    fullName: new FormControl(),
    shortName: new FormControl(),
    inn: new FormControl(),
    kpp: new FormControl(),
    mainPerson: new FormControl(),
    adress: new FormControl(),
    phone: new FormControl(),
  });

  handleSubmit = () => {
    const {
      fullName,
      shortName,
      inn,
      kpp,
      mainPerson,
      adress,
      phone,
    } = this.organizationForm.value; // Получаем данные с формы

    // Передаем данные инпутов в хранилище
    this.store.dispatch(
      new AddOrganization({
        fullName,
        shortName,
        inn,
        kpp,
        mainPerson,
        adress,
        phone,
        id: uuidv1(), // Генерируем id
      })
    );
    this.store.dispatch(new ClosePopups());
  };

  handlerPopupClose = () => {
    this.store.dispatch(new ClosePopups());
  };
}
