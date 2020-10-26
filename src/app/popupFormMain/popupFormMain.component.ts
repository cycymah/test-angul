import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ClosePopups,
  AddOrganization,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class PopupFormMain implements Input {
  isOpen$: Observable<any>;
  subscribeData: any;
  @Input() idMain: number;

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
      new AddOrganization({
        fullName,
        shortName,
        inn,
        kpp,
        mainPerson,
        adress,
        phone,
      })
    );
    this.store.dispatch(new ClosePopups());
  };

  handlerPopupClose = () => {
    console.log(this.idMain);
    this.store.dispatch(new ClosePopups());
  };
}
