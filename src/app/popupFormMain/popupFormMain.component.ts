import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CLOSE_MAIN } from '../store/constants/constants';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class popupFormMain {
  isOpen$: Observable<any>;
  subscribeData$: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('isOpen');
    this.subscribeData$ = this.isOpen$.subscribe(
      (data) => (this.subscribeData$ = data)
    );
  }

  handlerPopupClose = () => {
    this.store.dispatch({ type: CLOSE_MAIN });
  };
}
