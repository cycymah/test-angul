import { Component, Input } from '@angular/core';
import FilialInterface from '../interfaces/FilialInterface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { OPEN_FILIAL } from '../store/constants/constants';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css'],
})
export class Filial {
  @Input() filialCard: FilialInterface[];
  isOpen$: Observable<any>;
  subscribeData$: any;
  constructor(private store: Store<any>) {
    this.isOpen$ = this.store.select('isOpen');
    this.subscribeData$ = this.isOpen$.subscribe(
      (data) => (this.subscribeData$ = data)
    );
  }
  handleEdit = () => {
    this.store.dispatch({ type: OPEN_FILIAL });
  };
}
