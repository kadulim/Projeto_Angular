import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'form',
        component: Form,
    }
];
