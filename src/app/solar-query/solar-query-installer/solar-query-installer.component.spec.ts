import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryInstallerComponent } from './solar-query-installer.component';
import {HttpClientModule} from '@angular/common/http';
import {provideMockStore} from '@ngrx/store/testing';
import {SolarQueryService} from '../solar-query.service';

describe('SolarQueryInstallerComponent', () => {
  let component: SolarQueryInstallerComponent;
  let fixture: ComponentFixture<SolarQueryInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SolarQueryInstallerComponent, provideMockStore(), SolarQueryService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryInstallerComponent);
    component = fixture.componentInstance;
    component.postCode = 2000;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
