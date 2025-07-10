import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import('./fanpage/fanpage.routes')
    },
    {
        path:'**',
        redirectTo:''
    }
];
