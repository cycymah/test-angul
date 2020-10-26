import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClosePopups } from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-filial',
  templateUrl: './popupFormFilial.component.html',
  styleUrls: ['./popupFormFilial.component.css'],
})
export class PopupFormFilial {
  storeData$: Observable<any>;
  subscribeData: boolean;

  constructor(private store: Store<any>) {
    this.storeData$ = this.store.select('reducer');
    this.storeData$.subscribe((data) => {
      this.subscribeData = data.isOpenFilial;
    });
  }

  handlerPopupClose = () => {
    this.store.dispatch(new ClosePopups());
  };
}
