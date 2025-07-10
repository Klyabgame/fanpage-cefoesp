import { Component } from '@angular/core';
import { HeaderSharedComponent } from "../../shared/components/header-shared/header-shared.component";
import { FooterSharedComponent } from "../../shared/components/footer-shared/footer-shared.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderSharedComponent, FooterSharedComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}

export default LayoutComponent;
