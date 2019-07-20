import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LobbyComponent } from './lobby/lobby.component';

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
