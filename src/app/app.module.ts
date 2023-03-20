import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsVsSignalsComponent } from './rxjs-vs-signals.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RxjsVsSignalsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
