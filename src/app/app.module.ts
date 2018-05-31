import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { XiongbabaComponent } from './components/xiongbaba/xiongbaba.component';
import { XiongsonComponent } from './components/xiongson/xiongson.component';
import { ViewParentComponent } from './components/view-parent/view-parent.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ViewChild1Component } from './components/view-child1/view-child1.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterRxComponent } from './components/register-rx/register-rx.component';
import { RegisterFormarrayComponent } from './components/register-formarray/register-formarray.component';

@NgModule({
  declarations: [
    AppComponent,
    XiongbabaComponent,
    XiongsonComponent,
    ViewParentComponent,
    ViewChildComponent,
    ViewChild1Component,
    RegisterComponent,
    RegisterRxComponent,
    RegisterFormarrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
