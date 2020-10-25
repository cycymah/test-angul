import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import {
  CloseMain,
  AddMainOrganization,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class popupFormMain implements OnInit, OnChanges {
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

  // ngOnChanges() {
  //   console.log(this.subscribeData.officeModalData);
  // }
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
      new AddMainOrganization({
        fullName,
        shortName,
        inn,
        kpp,
        mainPerson,
        adress,
        phone,
      })
    );
    this.store.dispatch(new CloseMain());
  };

  handlerPopupClose = () => {
    console.log(this.subscribeData.officeModalData);
    this.store.dispatch(new CloseMain());
  };
}
