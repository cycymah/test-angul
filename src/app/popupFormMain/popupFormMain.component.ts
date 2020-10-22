import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CLOSE } from '../store/constants/constants';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class popupFormMain {
  isOpen$: Observable<any>;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store
      .select('isOpen')
      .subscribe((data) => (this.isOpen$ = data));
  }

  handlerPopupClose() {
    this.store.dispatch({ type: CLOSE });
  }
}
