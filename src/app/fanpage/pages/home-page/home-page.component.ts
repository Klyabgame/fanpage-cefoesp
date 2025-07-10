import { Component } from '@angular/core';
import { PublicidadModalComponent } from "../../components/publicidad-modal/publicidad-modal.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [PublicidadModalComponent,RouterLink],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
