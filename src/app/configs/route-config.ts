import { Routes } from '@angular/router';

export const MODULE_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('src/app/modules/homepage/homepage.module').then(
                m => m.HomepageModule
            ),
    },
]