import { Component, signal } from '@angular/core';
import { FechasCursos } from '../../../shared/components/utils';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publicidad-modal',
  imports: [ RouterLink],
  templateUrl: './publicidad-modal.component.html',
  styles: ``
})
export class PublicidadModalComponent {

   showModal = signal<boolean>(true); // Modal visible al iniciar
   fechaCurso=FechasCursos;

  closeModal() {
    this.showModal.set(false); // Cambia el estado a false para cerrar el modal
  }
}
