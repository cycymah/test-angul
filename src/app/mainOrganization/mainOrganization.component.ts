import { Component, Input, OnInit } from '@angular/core';
import MainOrganizationInterface from '../interfaces/MainOrganizationInterface';
import FilialInterface from '../interfaces/FilialInterface';
import { OPEN_MAIN, CLOSE_MAIN, GET } from '../store/constants/constants';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-organization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization implements OnInit {
  @Input() mainCard: MainOrganizationInterface[]; // Прокидываем карточки с главного компонента

  isOpen$: Observable<any>;
  subscribeData$: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('isOpen');
    this.subscribeData$ = this.isOpen$.subscribe(
      (data) => (this.subscribeData$ = data)
    );
  }

  handleClickAdd = () => {
    console.log(this.subscribeData$);
    this.store.dispatch({ type: GET });
  };

  handleClickEdit = () => {
    console.log(this.subscribeData$);
    this.store.dispatch({ type: OPEN_MAIN });
  };
}
