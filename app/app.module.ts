import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";


import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HighwayComponent } from "./highway/htgway.component";
import { HigwayService } from "./highway/highway.service";
import { ShowComponent } from "./show/show.component";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { FilterComponent } from "./filter/filter.component";
import { BackendService } from "./backend.service";
import { ProvinceComponent } from "./filter/province/province.component";
import { SortComponent } from "./filter/sort/sort.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'
        })
    ],
    declarations: [
        AppComponent,
        HighwayComponent,
        ShowComponent,
        FilterComponent,
        ProvinceComponent,
        SortComponent
    ],
    entryComponents: [
        SortComponent
    ],
    providers: [
        HigwayService,
        BackendService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
