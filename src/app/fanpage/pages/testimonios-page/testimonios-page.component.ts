import { Component } from '@angular/core';

import { ImgSkeletonComponent } from '../../../shared/components/img-skeleton/img-skeleton.component';

interface Testimonio {
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-testimonios-page',
  imports: [ImgSkeletonComponent],
  templateUrl: './testimonios-page.component.html',
  styles: ``
})
export class TestimoniosPageComponent {
  readonly testimonios: Testimonio[] = [
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752160718/aula-virtual-cefoesp/IMG-CEFOESP/WhatsApp-Image-2025-01-09-at-14.21.35_c1ada269_1_omrk2i.jpg',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752160718/aula-virtual-cefoesp/IMG-CEFOESP/WhatsApp-Image-2025-01-09-at-14.29.49_378c9a83_cxkohl.jpg',
      title: 'Modalidad Presencial',
      desc: 'Curso Desarrollado en el departamento de Apurímac'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752085108/aula-virtual-cefoesp/IMG-CEFOESP/curso-formacion_mtxxkq.jpg',
      title: 'Modalidad Online',
      desc: 'Curso de Perfeccionamiento'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161332/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-05-24_083004_bzp37y.png',
      title: 'Modalidad Online',
      desc: 'Curso de Perfeccionamiento'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161332/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-05-24_082927_otrknv.png',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161332/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-03-21_114932_acxav7.png',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161332/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-04-16_152141_psxv2v.png',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161332/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-04-16_152319_podioi.png',
      title: 'Modalidad Online',
      desc: 'Curso de Perfeccionamiento'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161333/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-04-29_082652_t97qn2.png',
      title: 'Modalidad Online',
      desc: 'Curso de Perfeccionamiento'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161333/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-05-24_082832_heeqmh.png',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161333/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-05-24_083027_g728qw.png',
      title: 'Modalidad Online',
      desc: 'Curso de Perfeccionamiento'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161333/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-03-20_074942_k8qr7n.png',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161333/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-03-27_144935_tr7fno.png',
      title: 'Modalidad Online',
      desc: 'Curso de Formación Básica'
    },
    {
      img: 'https://res.cloudinary.com/dt86tk7ed/image/upload/v1752161333/aula-virtual-cefoesp/IMG-CEFOESP/Captura_de_pantalla_2024-03-07_080926_vlkxpb.png',
      title: 'Modalidad Online',
      desc: 'Curso de Perfeccionamiento'
    }
  ];
}
