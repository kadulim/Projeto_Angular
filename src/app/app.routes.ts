import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';
<<<<<<< HEAD
=======
import { Pokedex } from './pokedex/pokedex';
>>>>>>> master

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'form',
        component: Form,
<<<<<<< HEAD
    }
];
=======
    },
    { path: 'pokedex', redirectTo: 'pokedex/1', pathMatch: 'full' },

    { 
        path: 'pokedex/:id', 
        component: Pokedex 
    },
];
>>>>>>> master
