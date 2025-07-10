import { Component } from '@angular/core';
import { FechasCursos } from '../../../shared/components/utils';

@Component({
  selector: 'app-cursos-page',
  imports: [],
  templateUrl: './cursos-page.component.html',
  styles: ``
})
export class CursosPageComponent {

  horario= FechasCursos;

}
