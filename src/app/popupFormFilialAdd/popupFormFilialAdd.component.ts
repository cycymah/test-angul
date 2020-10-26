import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ClosePopups,
  AddFilialData,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-filial-add',
  templateUrl: './popupFormFilialAdd.component.html',
  styleUrls: ['./popupFormFilialAdd.component.css'],
})
export class PopupFormFilialAddComponent {
  storeData$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.storeData$ = this.store.select('reducer');
    this.storeData$.subscribe((data) => {
      this.subscribeData = data;
    });
  }
  filialForm = new FormGroup({
    fullName: new FormControl(),
    shortName: new FormControl(),
    inn: new FormControl(),
    kpp: new FormControl(),
    mainPerson: new FormControl(),
    adress: new FormControl(),
    phone: new FormControl(),
  });

  // Сабмит добавления филиала
  handleSubmit = () => {
    const { mainPerson, adress, phone } = this.filialForm.value;

    this.store.dispatch(
      new AddFilialData({
        mainPerson,
        adress,
        phone,
        id: this.subscribeData.officeModalData.id,
      })
    );
    this.store.dispatch(new ClosePopups());
  };

  handlerPopupClose = () => {
    this.store.dispatch(new ClosePopups());
  };
}
