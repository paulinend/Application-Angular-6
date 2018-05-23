import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../core/item.model';
import { State } from '../../state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('value') value: Item;
  state = State;
  constructor() { }

  ngOnInit() {
  }

  changeState(state: State): void {
    this.value.state = state;
    // this.collectionService.update(this.value)
  }
}
