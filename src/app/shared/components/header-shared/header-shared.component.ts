import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import FanpageRoutes from '../../../fanpage/fanpage.routes';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-header-shared',
  imports: [UpperCasePipe,RouterLink, RouterLinkActive],
  templateUrl: './header-shared.component.html',
  styles: ``
})
export class HeaderSharedComponent {

  environment=environment;
  router= FanpageRoutes;
  routerTitle=signal< Route[] | [] >(this.router[0].children ?? []);

}
