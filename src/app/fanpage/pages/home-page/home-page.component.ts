import { Component, inject, OnInit } from '@angular/core';
import { PublicidadModalComponent } from "../../components/publicidad-modal/publicidad-modal.component";
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home-page',
  imports: [PublicidadModalComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent implements OnInit {

  private meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Obtén o renueva tu carné SUCAMEC 100% online con Cefoesp Seguridad Superior. Formación Básica y Perfeccionamiento válidos en todo el Perú.' });
    this.meta.updateTag({ name: 'og:title', content: 'Cefoesp Seguridad Superior SAC' });
    this.meta.updateTag({
      property: 'og:image',
      content: environment.URL_LOGO_CEFOESP
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Obtén o renueva tu carné SUCAMEC 100% online con Cefoesp Seguridad Superior.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.cefoesp.org.pe/main'
    });
    this.meta.updateTag({ name: 'keywords', content: 'curso SUCAMEC,curso SUCAMEC virtual,curso SUCAMEC online,formación básica SUCAMEC,curso de formación básica seguridad privada,curso de perfeccionamiento SUCAMEC,renovación curso SUCAMEC,seguridad privada Perú,vigilante privado Perú,carné SUCAMEC ' });
  }




}
