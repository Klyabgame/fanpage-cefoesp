import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import LayoutComponent from './layout/layout.component';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { TestimoniosPageComponent } from './pages/testimonios-page/testimonios-page.component';

export const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'main',
                title:'HOME',
                component: HomePageComponent
            },
            {
                path: 'about',
                title:'CONOCENOS',
                component: AboutMePageComponent
            },
            {
                path: 'cursos',
                title:'CURSOS',
                component: CursosPageComponent
            },
            {
                path: 'testimonios',
                title:'TESTIMONIOS',
                component: TestimoniosPageComponent
            }, 
            {
                path: 'contact',
                title:'CONTACTANOS',
                component: ContactanosPageComponent
            },
            
            {
                path: '**',
                redirectTo: 'main'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default layoutRoutes;
