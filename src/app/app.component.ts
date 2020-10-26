import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { OpenMain, GetMainData } from './store/actions/organization.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  autorizationForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  dataCards$: Observable<any>;
  subscribeData: [];

  constructor(private store: Store<any>) {
    this.dataCards$ = this.store.select('reducer');
    this.dataCards$.subscribe((data) => {
      this.subscribeData = data.mainOffice;
    });
    this.store.dispatch(new GetMainData());
  }

  handleAddMain = () => {
    this.store.dispatch(new OpenMain()); // Открытие попапа с добавлением головной организации
  };

  handleSubmit = () => {}; // Подтверждене для авторизации
}
