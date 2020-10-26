import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { OpenFilial } from '../store/actions/organization.actions';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css'],
})
export class Filial {
  @Input() filialCard;
  storeData$: Observable<any>;
  subscribeData: any;

  constructor(private store: Store<any>) {
    this.storeData$ = this.store.select('reducer');
    this.storeData$.subscribe(
      (data) => (this.subscribeData = data.isOpenFilial)
    );
  }

  handleEdit = () => {
    this.store.dispatch(new OpenFilial());
  };
}
