import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShellComponent} from './shell.component';
import {ChoiceHeaderComponent} from '../choice-header/choice-header.component';
import {ChoiceFooterComponent} from '../choice-footer/choice-footer.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        RouterTestingModule
      ],
      declarations:
        [ShellComponent,
          ChoiceHeaderComponent,
          ChoiceFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
