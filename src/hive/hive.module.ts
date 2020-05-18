import { NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { CommonModule, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { RouteReusableStrategy } from "./route-reusable-strategy";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../app/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import * as moment from "moment";
import "moment/locale/tr";
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import {
    MAT_MOMENT_DATE_FORMATS,
    MomentDateAdapter,
    MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "@angular/material-moment-adapter";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { ApiPrefixInterceptor } from "./http/api-prefix.interceptor";
import { DefaultInterceptor } from "./http/default.interceptor";

export const MY_FORMATS = {
    parse: {dateInput: "DD.MM.YYYY"},
    display: {dateInput: "LL", monthYearLabel: "MMM YYYY", dateA11yLabel: "LL", monthYearA11yLabel: "MMMM YYYY"}
};

@NgModule({
    declarations: [PageHeaderComponent],
    imports: [HttpClientModule, MaterialModule, FlexLayoutModule],
    exports: [PageHeaderComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
        {provide: RouteReuseStrategy, useClass: RouteReusableStrategy},
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        [
            {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            }
        ],
        {provide: MAT_DATE_LOCALE, useValue: "tr-TR"},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
        Location
    ]
})
export class HiveModule {
}

@NgModule({})
export class HiveCoreModule {
    constructor(@Optional() @SkipSelf() parentModule: HiveCoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(
                `Hive Core has already been loaded. Import Core module in the AppModule only.`
            );
        }
    }

    static forRoot(): ModuleWithProviders<HiveCoreModule> {
        return {
            ngModule: HiveCoreModule,
            providers: []
        };
    }
}
