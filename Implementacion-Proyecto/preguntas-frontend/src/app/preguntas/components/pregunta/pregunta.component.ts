import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  nivel: number = 1;
  preguntaEnJuego: string = '';
  numeroPregunta: number = 0;
  preguntas: Array<any> = [];
  idPregunta: number = 1;
  ronda: number = 1;

  constructor(
    private ps: PreguntasService
  ) { }

  ngOnInit(): void {
    this.getPreguntas( this.nivel );
  }

  getPreguntas( nivel: number ) {
    this.ps.getPreguntas( nivel )
      .subscribe( ({ preguntas }: any) => {
        this.preguntas = preguntas;
        console.log( this.preguntas );
        this.realizarPregunta();
      })
  }

  realizarPregunta() {
  
    //this.idPregunta = this.preguntas[ this.numeroPregunta ].Id;
    if( this.numeroPregunta > 4 ) {
      this.nivel = this.nivel + 1;
      this.numeroPregunta = 0;
      this.preguntas =[];
      this.ronda = this.ronda + 1;
      if( this.ronda <= 5 ) {
        
        this.getPreguntas( this.nivel );
      }  else {
        alert('¡Felicitaciones! Has completado el juego.')
      }
    } else {
      this.preguntaEnJuego = this.preguntas[ this.numeroPregunta ].Pregunta;

    }

  }

  cambiarPregunta( event: any ) {
    console.log("HERE")
    this.numeroPregunta = this.numeroPregunta + 1;
    this.realizarPregunta();
  }

  reiniciarJuego( event: any) {
    console.log("AQUIII")
    this.nivel = 1;
    this.preguntaEnJuego = '';
   this.numeroPregunta = 0;
   this.preguntas = [];
   this.idPregunta = 1;
   this.ronda = 1;
   this.getPreguntas( this.nivel );
  }

}
