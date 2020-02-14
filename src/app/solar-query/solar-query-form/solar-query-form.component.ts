import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from '../state';
import {select, Store} from '@ngrx/store';
import * as queryActions from '../state/solar-query.actions';
import * as appActions from 'src/app/state/app.actions';
import {Observable} from 'rxjs';
import {log} from 'util';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-solar-query-form',
  templateUrl: './solar-query-form.component.html',
  styleUrls: ['./solar-query-form.component.scss']
})
export class SolarQueryFormComponent implements OnInit, OnDestroy {
  isComponentActive = true;
  isFormChanged = false;
  displayResults$: Observable<boolean>;

  queryForm: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.queryForm = this.fb.group({
      postCode: ['', [Validators.required, Validators.pattern(/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/)]],
      numberOfPeople: ['', [Validators.required]]
    });
    this.queryForm.valueChanges.pipe(
      takeWhile(() => this.isComponentActive),
      tap(data => this.isFormChanged = true)
    ).subscribe();
    this.displayResults$ = this.store.pipe(select(fromSolarQuery.getHasResults));
  }

  submit() {
    if (!this.isFormChanged) {
      return;
    }
    this.store.dispatch(new queryActions.ToggleQuerying(true));
    this.store.dispatch(new queryActions.GetStateFromPostcode(this.queryForm.value.postCode));
    this.store.dispatch(new queryActions.ChangeFormInput(this.queryForm.value));
    this.isFormChanged = false;
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
