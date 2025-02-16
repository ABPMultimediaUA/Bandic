/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PulseraComponent } from './pulsera.component';

describe('PulseraComponent', () => {
  let component: PulseraComponent;
  let fixture: ComponentFixture<PulseraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
