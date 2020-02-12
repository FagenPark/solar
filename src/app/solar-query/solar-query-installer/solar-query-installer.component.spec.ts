import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryInstallerComponent } from './solar-query-installer.component';
import {HttpClientModule} from '@angular/common/http';

describe('SolarQueryInstallerComponent', () => {
  let component: SolarQueryInstallerComponent;
  let fixture: ComponentFixture<SolarQueryInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SolarQueryInstallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
