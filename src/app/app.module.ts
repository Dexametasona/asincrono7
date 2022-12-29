import { ElementosModule } from './elementos/elementos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
