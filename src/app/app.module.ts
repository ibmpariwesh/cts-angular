import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './UserService';
import { CounterComponent } from './counter/counter.component';
import { EllipsisPipe } from './ellipsis.pipe';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EllipsisPipe,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [BaseComponent]
})
export class AppModule { }
