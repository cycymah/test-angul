import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ClosePopups,
  AddMainOrganization,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-main-edit',
  templateUrl: './popupFormMainEdit.component.html',
  styleUrls: ['./popupFormMainEdit.component.css'],
})
export class PopupFormMainEditComponent {
  isOpen$: Observable<any>;
  subscribeData: any;
  @Input() idMain: number;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.subscribeData = this.isOpen$.subscribe(
      (data) => (this.subscribeData = data.isOpenEditMain)
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
    this.store.dispatch(new ClosePopups());
  };

  handlerPopupClose = () => {
    console.log(this.idMain);
    this.store.dispatch(new ClosePopups());
  };
}
