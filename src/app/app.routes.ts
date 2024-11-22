import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./compo/chess-bord/chess-bord.component').then(comp => comp.ChessBordComponent)
    }
];
