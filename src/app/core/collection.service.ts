import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable, from, of } from 'rxjs';
import { State } from '../items/state.enum';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  collection$: Observable<Item[]>;
  _collection: Item[];
  constructor() {
    this.collection = [
      {
        id: '1',
        name: 'itemName',
        reference: '1234',
        state: State.ALIVRER
      },
      {
        id: '2',
        name: 'itemName2',
        reference: '5678',
        state: State.LIVREE
      }
    ];
    this.collection$ = of(this.collection);
  }

  get collection(): Item[] {
    return this._collection;
  }

  set collection(col: Item[] ) {
     this._collection = col;
  }

}
