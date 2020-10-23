import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GET } from './store/constants/constants';

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
  subscribeData: any;
  test: any;

  constructor(private store: Store<any>) {
    this.dataCards$ = this.store.select('modalOpenMainReducer');
    this.subscribeData = this.dataCards$.subscribe(
      (data) => (this.subscribeData = data)
    );
  }
  // ngOnInit() {
  //   this.test = this.store.dispatch({ type: GET });
  // }

  handleSubmit = () => {
    const { password, login } = this.autorizationForm.value;

    // const info = this.store.dispatch({ type: GET });
    console.log(this.subscribeData.isOpenMain);
  };
}
