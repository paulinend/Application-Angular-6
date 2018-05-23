import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionService } from './collection.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CollectionService],
  declarations: []
})
export class CoreModule { }
