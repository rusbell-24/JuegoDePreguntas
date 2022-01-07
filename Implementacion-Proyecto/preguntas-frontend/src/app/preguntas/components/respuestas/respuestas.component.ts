import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {
  respuestas: any[] = [];
  @Input() idPregunta: number = 1;
  idRespuestaCorrecta: number = 0;
  @Output() eventPreguntaCorrecta: EventEmitter< any > = new EventEmitter();
  @Output() eventPreguntaIncorrecta: EventEmitter< any > = new EventEmitter();

  constructor(
    private ps: PreguntasService
  ) { }

  ngOnInit(): void {
    this.getRespuestas( this.idPregunta );
    this.getRespuestaCorrecta();
  }

  getRespuestas( idPregunta: number ) {
    this.ps.getRespuestas( idPregunta )
      .subscribe( ({ respuestas }: any) => {
        this.respuestas = [];
        this.respuestas = respuestas;
      });
  }

  getRespuestaCorrecta() {
    this.ps.getRespuestaCorrecta( this.idPregunta )
      .subscribe( ( { respuestaCorrecta }: any ) => {
        this.idRespuestaCorrecta = respuestaCorrecta.respuestum.Id;
      } );
  }

  verificarRespuesta( idRespuesta: number ) {
    console.log( idRespuesta )
    console.log( this.idRespuestaCorrecta )
    if( idRespuesta === this.idRespuestaCorrecta ) {
      console.log("Correcto!!!")
      this.eventPreguntaCorrecta.emit( true );
      this.idPregunta = this.idPregunta + 1;
      this.getRespuestas( this.idPregunta );
      this.getRespuestaCorrecta();
    } else {
      alert('Perdiste');
      this.reiniciarJuego();
    }
    
  }

  reiniciarJuego() {
    this.eventPreguntaIncorrecta.emit( true );
    this.respuestas = [];
    this.idPregunta = 1;
    this.idRespuestaCorrecta = 0;
    this.getRespuestas( this.idPregunta );
    this.getRespuestaCorrecta();
  }

}
