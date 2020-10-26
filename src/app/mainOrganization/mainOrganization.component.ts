import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  OpenEditMain,
  AddPopupInfo,
  OpenAddFilial,
} from '../store/actions/organization.actions';

@Component({
  selector: 'app-main-organization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization {
  @Input() mainCard;

  isOpen$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.subscribeData = this.isOpen$.subscribe(
      (data) => (this.subscribeData = data)
    );
  }

  handleClickAdd = () => {
    this.store.dispatch(
      new AddPopupInfo({
        fullName: this.mainCard.fullName,
        shortName: this.mainCard.shortName,
        inn: this.mainCard.inn,
        kpp: this.mainCard.kpp,
        mainPerson: this.mainCard.mainPerson,
        adress: this.mainCard.adress,
        phone: this.mainCard.phone,
        id: this.mainCard.id,
      })
    );
    this.store.dispatch(new OpenAddFilial());
  };

  handleClickEdit = () => {
    this.store.dispatch(
      new AddPopupInfo({
        fullName: this.mainCard.fullName,
        shortName: this.mainCard.shortName,
        inn: this.mainCard.inn,
        kpp: this.mainCard.kpp,
        mainPerson: this.mainCard.mainPerson,
        adress: this.mainCard.adress,
        phone: this.mainCard.phone,
        id: this.mainCard.id,
      })
    );
    this.store.dispatch(new OpenEditMain());
  };
}
