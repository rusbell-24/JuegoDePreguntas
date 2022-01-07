import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(
    private http: HttpClient
  ) { }


  getJugador() {
    return this.http.get( `${environment.apiBackend}/jugador` );
  }

  getPreguntas( nivel: number ) { 
    return this.http.get(`${environment.apiBackend}/preguntas?id=${ nivel }`)
  }

  getRespuestas( idPregunta: number ) {
    return this.http.get(`${environment.apiBackend}/respuestas?id=${ idPregunta }`)
  }

  getRespuestaCorrecta( idPregunta: number ) {
    return this.http.get(`${environment.apiBackend}/respuesta-correcta?id=${ idPregunta }`)
  }


}


