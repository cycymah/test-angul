import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OpenEditMain } from '../store/actions/organization.actions';

@Component({
  selector: 'app-main-organization',
  templateUrl: './mainOrganization.component.html',
  styleUrls: ['./mainOrganization.component.css'],
})
export class MainOrganization implements Input {
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
    console.log(this.mainCard);
  };

  handleClickEdit = () => {
    this.store.dispatch(new OpenEditMain());
  };
}
