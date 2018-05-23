import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemsComponent } from './containers/add-items/add-items.component';

const itemsRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'add', component: AddItemsComponent},
    {path: 'list', component: ListItemsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(itemsRoutes)
  ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule { }
