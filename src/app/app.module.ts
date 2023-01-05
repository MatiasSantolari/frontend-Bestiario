import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MonstruosComponent } from './monstruos/monstruos.component';
import { MonstruoComponent } from './monstruos/monstruo/monstruo.component';
import { MonstruosService } from './services/monstruos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonstruosComponent,
    MonstruoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MonstruosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
