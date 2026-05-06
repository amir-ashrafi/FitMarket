import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MainLayout } from './main-layout';
import { AuthGuard } from './core/auth/gurds/auth.module';
import { RoleGuard } from './core/auth/gurds/role.gurd';
import { Login } from './core/auth/pages/login/login';
import { Register } from './core/auth/pages/register/register';
import { AuthForm } from './core/auth/pages/auth-form/auth-form';


export const routes: Routes = [
    {
        path:'',
        component:MainLayout,
        children:[
               {
                path:'',
                component:Home,
            },

        ]
    }
,
    {
        path:'admin-panel',
        loadChildren:() =>import('./features/dashboard/dashboard.routes').then(m=>m.ADMINROUTES),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] },
        title:'مدیریت فروشگاه'
    },
    
{
    path: 'auth',
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' }

];
