import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CloseFilial } from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-filial',
  templateUrl: './popupFormFilial.component.html',
  styleUrls: ['./popupFormFilial.component.css'],
})
export class popupFormFilial {
  isOpen$: Observable<any>;
  subscribeData: boolean;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.isOpen$.subscribe((data) => (this.subscribeData = data.isOpenFilial));
  }

  handlerPopupClose = () => {
    this.store.dispatch(new CloseFilial());
  };
}
