import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
    ],
    imports: [
        CommonModule,

        AngularMaterialModule,
    ]
})
export class SharedModule { }
