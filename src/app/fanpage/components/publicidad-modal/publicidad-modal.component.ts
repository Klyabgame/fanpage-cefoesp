import { Component, inject, OnInit, signal } from '@angular/core';
import { FechasCursos } from '../../../shared/utils';
import { RouterLink } from '@angular/router';
import { HorarioService } from '../../services/horario.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-publicidad-modal',
  imports: [RouterLink],
  templateUrl: './publicidad-modal.component.html',
  styles: ``
})
export class PublicidadModalComponent {


  showModal = signal<boolean>(true); // Modal visible al iniciar
  /* fechaCurso = FechasCursos;
  fechaCurso2 = signal<any | null>(null); */
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


  closeModal() {
    this.showModal.set(false); // Cambia el estado a false para cerrar el modal
  }
}
