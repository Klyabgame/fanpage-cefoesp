import { Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import FanpageRoutes from '../../../fanpage/fanpage.routes';
import { Route, RouterLink } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'shared-footer-shared',
  imports: [RouterLink],
  templateUrl: './footer-shared.component.html',
  styles: ``
})
export class FooterSharedComponent {

  environment=environment;
  router= FanpageRoutes;
  routerTitle=signal< Route[] | [] >(this.router[0].children ?? []);

  readonly images = [
    'https://res.cloudinary.com/dt86tk7ed/image/upload/v1751924089/aula-virtual-cefoesp/carousel-cefoesp/pc-security_1_w7xpgi.png',
    'https://res.cloudinary.com/dt86tk7ed/image/upload/v1751924088/aula-virtual-cefoesp/carousel-cefoesp/klipartz.com__m5lhhr.png',
    'https://res.cloudinary.com/dt86tk7ed/image/upload/v1751924088/aula-virtual-cefoesp/carousel-cefoesp/online-mod-raw_1_qdm9yq.png',
    'https://res.cloudinary.com/dt86tk7ed/image/upload/v1751818138/aula-virtual-cefoesp/logo-cefoesp/CEFOESP_Mesa_de_trabajo_1_copia_rg2b8t.png'
  ] as const;

  readonly carousel = viewChild<ElementRef<HTMLDivElement>>('carousel'); 

  constructor() {

    effect((onCleanup) => {
      const host = this.carousel()?.nativeElement;
      if (!host) return; 

      const itemWidth = host.scrollWidth / this.images.length;
      const sub = interval(2000).subscribe(() => {
        host.scrollBy({ left: itemWidth, behavior: 'smooth' });
        if (host.scrollLeft + host.clientWidth >= host.scrollWidth) {
          host.scrollTo({ left: 0 });
        }
      });

      onCleanup(() => sub.unsubscribe());
    });
  }
}

