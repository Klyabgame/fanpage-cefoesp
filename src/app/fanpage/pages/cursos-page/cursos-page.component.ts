import { Component, inject } from '@angular/core';
import { FechasCursos } from '../../../shared/utils';
import { rxResource } from '@angular/core/rxjs-interop';
import { HorarioService } from '../../services/horario.service';

@Component({
  selector: 'app-cursos-page',
  imports: [],
  templateUrl: './cursos-page.component.html',
  styles: ``
})
export class CursosPageComponent {

  //horario= FechasCursos;
   private horarioService = inject(HorarioService);

  fechaCursoBasic = rxResource({
    loader: () => {
      return this.horarioService.getCourseBasic();
    }
  });

  fechaCursoPerfec = rxResource({
    loader: () => {
      return this.horarioService.getCoursePerfec();
    }
  });

}
