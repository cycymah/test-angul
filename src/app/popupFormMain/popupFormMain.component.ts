import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { CLOSE_MAIN } from '../store/constants/constants';
import { AddMainOrganization } from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class popupFormMain {
  isOpen$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('isOpen');
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
    this.store.dispatch({ type: CLOSE_MAIN });
    // console.log(fullName, shortName, inn, kpp, mainPerson, adress, phone);
  };

  handlerPopupClose = () => {
    this.store.dispatch({ type: CLOSE_MAIN });
  };
}
