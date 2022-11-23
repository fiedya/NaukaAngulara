import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondPageHomeComponent } from "./second-page-home/second-page-home.component";


const routes: Routes = [
    {
        path: '',
        component: SecondPageHomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SecondPageRoutingModule { }