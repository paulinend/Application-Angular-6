import { Component, OnInit } from '@angular/core';
import { State } from '../../state.enum';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  state = State;
  nom: string;
  ref: string;
  etat: string;
  constructor() { }

  ngOnInit() {
    this.etat = State.ALIVRER;
  }

  process(form) {
    console.log(form.value);
  }

}
