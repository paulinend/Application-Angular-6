import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AddItemsComponent } from './containers/add-items/add-items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, AddItemsComponent, ItemComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
