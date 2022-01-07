import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugador: Jugador = {
    id: 0,
    nombre: '',
    puntaje: 0,
    nivel: 0
  }

  constructor(
    private preguntasService: PreguntasService
  ) { }

  ngOnInit(): void {
    this.getJugador();
  }

  getJugador() {
    this.preguntasService.getJugador()
      .subscribe( ({ data }: any) => {
        this.jugador = data;
      });
  }

}
