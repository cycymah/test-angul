import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { OpenMain } from './store/actions/organization.actions';
import { GetMainData } from './store/actions/organization.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  autorizationForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  dataCards$: Observable<any>;
  subscribeData: [];

  constructor(private store: Store<any>) {
    this.dataCards$ = this.store.select('reducer');
    this.dataCards$.subscribe((data) => {
      console.log(data.mainOffice);
      this.subscribeData = data.mainOffice;
    });
  }
  // console.("asdas");

  ngOnInit() {
    this.store.dispatch(new GetMainData());
  }

  handleSubmit = () => {
    console.log(this.subscribeData);
    const { password, login } = this.autorizationForm.value;
    this.store.dispatch(new OpenMain());
  };
}
