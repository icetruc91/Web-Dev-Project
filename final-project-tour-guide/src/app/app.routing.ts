import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);
