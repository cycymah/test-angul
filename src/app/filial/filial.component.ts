import { Component, Input } from '@angular/core';
import { FilialInterface } from '../interfaces/FilialInterface';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css'],
})
export class Filial {
  @Input() filialCard: FilialInterface[];
}
