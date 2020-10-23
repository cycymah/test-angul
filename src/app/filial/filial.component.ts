import { Component, Input } from '@angular/core';
import FilialInterface from '../interfaces/FilialInterface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CloseFilial, OpenFilial } from '../store/actions/organization.actions';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css'],
})
export class Filial {
  @Input() filialCard: FilialInterface[];
  isOpen$: Observable<any>;
  subscribeData: boolean;

  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('reducer');
    this.isOpen$.subscribe((data) => (this.subscribeData = data.isOpenFilial));
  }

  handleEdit = () => {
    // console.log(this.subscribeData);
    this.store.dispatch(new OpenFilial());
  };
}
