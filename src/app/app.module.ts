import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarComponent } from './alumnos/registrar/registrar.component';
import { VerComponent } from './alumnos/ver/ver.component';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    VerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
