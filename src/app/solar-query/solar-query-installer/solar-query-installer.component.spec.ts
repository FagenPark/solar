import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryInstallerComponent } from './solar-query-installer.component';

describe('SolarQueryInstallerComponent', () => {
  let component: SolarQueryInstallerComponent;
  let fixture: ComponentFixture<SolarQueryInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
