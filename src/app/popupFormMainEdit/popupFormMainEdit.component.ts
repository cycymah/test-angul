import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ClosePopups,
  AddOrganization,
  EditMainOrganization,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-main-edit',
  templateUrl: './popupFormMainEdit.component.html',
  styleUrls: ['./popupFormMainEdit.component.css'],
})
export class PopupFormMainEditComponent {
  isOpen$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.subscribeData = this.isOpen$.subscribe(
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
    } = this.organizationForm.value;

    this.store.dispatch(
      new EditMainOrganization({
        fullName,
        shortName,
        inn,
        kpp,
        mainPerson,
        adress,
        phone,
        id: this.subscribeData.officeModalData.id,
      })
    );
    this.store.dispatch(new ClosePopups());
    console.log(this.subscribeData.officeModalData);
  };

  handlerPopupClose = () => {
    console.log(this.subscribeData.officeModalData.id);
    this.store.dispatch(new ClosePopups());
  };
}
