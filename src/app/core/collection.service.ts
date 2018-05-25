import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable, from, of } from 'rxjs';
import { State } from '../items/state.enum';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  _collection$: any;
  itemsCollection: any;
  collection$: Observable<Item[]>;
  itelsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
  }

  // add Item
  addItem(item: Item) {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
    .catch(error => console.log(error));
  }

  // update Item
  update(item: Item) {
    this.itemsCollection.doc(item.id).update(item).catch(error => console.log(error));
  }

  // delete Item
  delete(item: Item) {
    this.itemsCollection.doc(item.id).delete().catch(error => console.log(error));
  }

  // get item id
  getItem(id: string) {
    return this.afs.collection<Item>(`collection/${id}`).valueChanges();
  }

}
