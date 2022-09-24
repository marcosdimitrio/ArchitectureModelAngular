import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './import-guard/import-guard';

import { ErrorDialogComponent } from './messaging/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './messaging/confirm-dialog/confirm-dialog.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        ErrorDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        BrowserModule,
        BrowserAnimationsModule,
        AngularMaterialModule,

        HttpClientModule,
    ],
    entryComponents: [
        ConfirmDialogComponent,
        ErrorDialogComponent,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
