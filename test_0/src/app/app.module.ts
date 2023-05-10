import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationalComponent } from './components/presentational/presentational.component';
import { ContainerLikeComponent } from './components/container-like/container-like.component';
import { AsyncLikeComponent } from './components/async-like/async-like.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationalComponent,
    ContainerLikeComponent,
    AsyncLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
