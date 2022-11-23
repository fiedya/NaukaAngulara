import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralLayoutHomeComponent } from './general-layout-home/general-layout-home.component';

const routes: Routes = [
    {
        path: '',
        component: GeneralLayoutHomeComponent,
        children: [
            {
                path: 'home-page',
                loadChildren: () =>
                    import('../../pages/home-page/home-page.module').then(
                        (m) => m.HomePageModule
                    )
            },
            {
                path: 'second-page',
                loadChildren: () =>
                    import('../../pages/second-page/second-page.module').then(
                        (m) => m.SecondPageModule
                    )
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class GeneralLayoutRoutingModule { }
