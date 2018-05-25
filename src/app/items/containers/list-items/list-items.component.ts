import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/collection.service';
import { Observable } from 'rxjs';
import { Item } from '../../../core/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  collection$: Observable<Item>;
  collection: Item[];
  constructor(public collectionservice: CollectionService) { }

  ngOnInit() {

    this.collection$ = this.collectionservice._collection$;
  }

  updateItem(event) {
    this.collectionservice.update(event);
  }

  deleteItem(event) {
    this.collectionservice.delete(event);
  }

}
