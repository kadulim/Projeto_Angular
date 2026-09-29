import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';
import { Pokedex } from './pokedex/pokedex';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'form',
        component: Form,
    },
    {
        path: 'pokedex',
        redirectTo: 'pokedex/1',
        pathMatch: 'full'
    },
    {
        path: 'pokedex/:id',
        component: Pokedex
    }
];