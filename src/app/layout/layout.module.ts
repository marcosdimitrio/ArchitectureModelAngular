import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MainLayoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        SharedModule,
    ],
    exports: [
        MainLayoutComponent,
    ]
})
export class LayoutModule { }
