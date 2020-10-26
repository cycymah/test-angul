import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClosePopups } from '../store/actions/organization.actions';

@Component({
  selector: 'app-popup-form-filial-add',
  templateUrl: './popupFormFilialAdd.component.html',
  styleUrls: ['./popupFormFilialAdd.component.css'],
})
export class PopupFormFilialAddComponent implements OnInit {
  isOpen$: Observable<any>;
  subscribeData: boolean;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.isOpen$.subscribe((data) => {
      this.subscribeData = data;
    });
  }

  handlerPopupClose = () => {
    this.store.dispatch(new ClosePopups());
  };
}
