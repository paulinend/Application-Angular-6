import { Component, OnInit } from '@angular/core';
import { State } from '../../state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; //rxjs 6

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  form: FormGroup;
  state = State;
  libelles: string[] = Object.values(State);
  constructor(public fb: FormBuilder) { }

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
    this.form.reset();
  }

  isError(fieldName: string) {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}
