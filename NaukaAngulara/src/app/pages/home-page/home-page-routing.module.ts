import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageHomeComponent } from "./home-page-home/home-page-home.component";


const routes: Routes = [
    {
        path: '',
        component: HomePageHomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomePageRoutingModule { }