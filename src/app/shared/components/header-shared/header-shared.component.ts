import { Component, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import FanpageRoutes from '../../../fanpage/fanpage.routes';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { ImgSkeletonComponent } from '../img-skeleton/img-skeleton.component';

@Component({
  selector: 'shared-header-shared',
  imports: [RouterLink, RouterLinkActive, ImgSkeletonComponent],
  templateUrl: './header-shared.component.html',
  styles: ``
})
export class HeaderSharedComponent {

  environment=environment;
  router= FanpageRoutes;
  routerTitle=signal< Route[] | [] >(this.router[0].children ?? []);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

}
