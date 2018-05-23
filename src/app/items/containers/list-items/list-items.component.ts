import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(public collectionservice: CollectionService) { }

  ngOnInit() {

    // this.collectionservice.collection$.subscribe
  }

}
