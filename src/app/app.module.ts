import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MonstruosComponent } from './monstruos/monstruos.component';
import { MonstruoComponent } from './monstruos/monstruo/monstruo.component';
import { MonstruosService } from './services/monstruos.service';
import { EspeciesComponent } from './especies/especies.component';
import { EspecieComponent } from './especies/especie/especie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonstruosComponent,
    MonstruoComponent,
    EspeciesComponent,
    EspecieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MonstruosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
