/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XiongsonComponent } from './xiongson.component';

describe('XiongsonComponent', () => {
  let component: XiongsonComponent;
  let fixture: ComponentFixture<XiongsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiongsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiongsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
