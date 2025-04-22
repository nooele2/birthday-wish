import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WhyComponent } from './why/why.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bio', component: BiographyComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'why', component: WhyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

