import { Routes } from '@angular/router';
import { StartComponent } from './containers/start/start.component';
import { LobbyComponent } from './containers/lobby/lobby.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  },
  {
    path: 'start',
    pathMatch: 'full',
    component: StartComponent
  },
  {
    path: 'lobby',
    pathMatch: 'full',
    component: LobbyComponent
  }

];
