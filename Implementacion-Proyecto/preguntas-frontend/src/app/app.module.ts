import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JugadorComponent } from './preguntas/components/jugador/jugador.component';
import { PreguntaComponent } from './preguntas/components/pregunta/pregunta.component';
import { RespuestasComponent } from './preguntas/components/respuestas/respuestas.component';
import { HomeComponent } from './preguntas/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    PreguntaComponent,
    RespuestasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
