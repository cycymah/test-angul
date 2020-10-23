import { Component, Input } from '@angular/core';
import { GET } from '../store/constants/constants';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OpenMain } from '../store/actions/organization.actions';

@Component({
  selector: 'app-main-organization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization {
  @Input() mainCard;

  isOpen$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.subscribeData = this.isOpen$.subscribe(
      (data) => (this.subscribeData = data)
    );
  }

  handleClickAdd = () => {
    this.store.dispatch({ type: GET });
  };

  handleClickEdit = () => {
    this.store.dispatch(new OpenMain());
  };
}
