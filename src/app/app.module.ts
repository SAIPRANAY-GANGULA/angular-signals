import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsVsSignalsComponent } from './rxjs-vs-signals.component';
import { SignalsInDepthComponent } from './signals-in-depth/signals-in-depth.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxjsVsSignalsComponent,
    SignalsInDepthComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
