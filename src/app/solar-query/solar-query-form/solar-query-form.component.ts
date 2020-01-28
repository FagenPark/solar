import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromRoot from 'src/app/state/app.state';
import {Store} from '@ngrx/store';
import * as queryActions from '../state/solar-query.actions';

@Component({
  selector: 'app-solar-query-form',
  templateUrl: './solar-query-form.component.html',
  styleUrls: ['./solar-query-form.component.scss']
})
export class SolarQueryFormComponent implements OnInit {

  queryForm: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.queryForm = this.fb.group({
      postCode: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      numberOfPeople: ['', [Validators.required]]
    });
  }

  submit() {
    this.store.dispatch(new queryActions.ChangeFormInput(this.queryForm.value));

  }
}
