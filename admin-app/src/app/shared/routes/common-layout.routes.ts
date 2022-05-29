import { Routes } from '@angular/router';
import { AuthGuard } from '../guard';

export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },

    // Contents
    {
        path: 'contents',
        data: {
            title: 'Contents',
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../contents/contents.module').then(m => m.ContentsModule)
            }
        ]
    },

    // Systems
    {
        path: 'systems',
        data: {
            title: 'Systems',
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../systems/systems.module').then(m => m.SystemsModule)
            }
        ]
    },

    // Statistics
    {
        path: 'statistics',
        data: {
            title: 'Statistics',
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../statistics/statistics.module').then(m => m.StatisticsModule)
            }
        ]
    },

    { 
        path: 'auth-callback', 
        loadChildren: () => import('../../auth-callback/auth-callback.module').then(m => m.AuthCallbackModule) 
    },
];