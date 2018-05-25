import { Component, OnInit } from '@angular/core';
import { State } from '../../state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; // rxjs 6
import { CollectionService } from '../../../core/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  form: FormGroup;
  state = State;
  libelles: string[] = Object.values(State);
  constructor(public fb: FormBuilder, public collectionservice: CollectionService, public router: Router) { }

  ngOnInit() {
    this.createForm();
      this.form.get('name').valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe((value) => console.log(value));

      this.form.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe((value) => console.log(value));
  }

  createForm() {
    this.form = this.fb.group({
      name: [ '', Validators.required],
      reference: ['', Validators.minLength(4)],
      state: this.state.ALIVRER
    });
  }

  process(form) {
    // Persister les données appel http/web service
    this.collectionservice.addItem(this.form.value);
    // this.router.navigate(['/list']);
    this.form.reset();
  }

  isError(fieldName: string) {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}
