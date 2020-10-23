import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CLOSE_FILIAL } from '../store/constants/constants';

@Component({
  selector: 'app-popup-form-filial',
  templateUrl: './popupFormFilial.component.html',
  styleUrls: ['./popupFormFilial.component.css'],
})
export class popupFormFilial {
  isOpen$: Observable<any>;
  subscribeData$: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('isOpen');
    this.subscribeData$ = this.isOpen$.subscribe(
      (data) => (this.subscribeData$ = data)
    );
  }

  handlerPopupClose = () => {
    this.store.dispatch({ type: CLOSE_FILIAL });
  };
}
