import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HighwayComponent } from "./highway/htgway.component";
import { ShowComponent } from "./show/show.component";

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
        path: "Show/:data",
        component: ShowComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }