import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../core/item.model';
import { State } from '../../state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('value') value: Item;
  @Output('Out') Out: EventEmitter<Item> = new EventEmitter();
  @Output('OutDelete') OutDelete: EventEmitter<Item> = new EventEmitter();
  state = State;
  constructor() { }

  ngOnInit() {
  }

  changeState(state: State): void {
    this.value.state = state;
    this.Out.emit(this.value);
  }

  deleteItem() {
    this.OutDelete.emit(this.value);
  }
}
