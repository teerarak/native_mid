import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HighwayComponent } from "./highway/htgway.component";
import { ShowComponent } from "./show/show.component";
import { FilterComponent } from "./filter/filter.component";
import { ProvinceComponent } from "./filter/province/province.component";
import { SortComponent } from "./filter/sort/sort.component";

const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/highway", 
        pathMatch: "full" 
    },
    { 
        path: "highway", 
        component: HighwayComponent 
    },
    { 
        path: "highway/:change", 
        component: HighwayComponent 
    },
    {
        path: "Show/:data",
        component: ShowComponent
    },
    {
        path: "filter",
        component: FilterComponent
    },
    {
        path: "province",
        component: ProvinceComponent
    },
    {
        path: "sort",
        component: SortComponent
    }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }