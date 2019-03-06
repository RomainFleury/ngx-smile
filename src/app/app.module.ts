import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmileModule } from 'ngx-smile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxSmileModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
