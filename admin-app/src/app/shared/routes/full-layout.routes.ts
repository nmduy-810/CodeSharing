import { Routes } from '@angular/router';
import { ContentsModule } from 'src/app/contents/contents.module';
import { StatisticsModule } from 'src/app/statistics/statistics.module';
import { AuthGuard } from '../guard';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'user-profile',
        loadChildren: () => import('../../user-profile/user-profile.module').then(m => m.UserProfileModule)
    },
    {
        path: 'systems',
        loadChildren: () => import('../../systems/systems.module').then(m => m.SystemsModule)
    },
    {
        path: 'contents',
        loadChildren: () => import('../../contents/contents.module').then(m => ContentsModule)
    },
    {
        path: 'statistics',
        loadChildren: () => import('../../statistics/statistics.module').then(m => StatisticsModule)
    },
    {
        path: 'application',
        loadChildren: () => import('../../application/application.module').then(m => m.ApplicationModule)

    },
    {
        path: 'ecommerce',
        loadChildren: () => import('../../ecommerce/ecommerce.module').then(m => m.EcommerceModule)
    },
    {
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('../../icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'form',
        loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    },
    {
        path: 'login',
        loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'auth-callback',
        loadChildren: () => import('../../auth-callback/auth-callback.module').then(m => m.AuthCallbackModule)
    }
];