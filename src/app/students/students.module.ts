import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { CoreModule } from '../core/core.module';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        StudentsComponent
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,

        HttpClientModule,
        CoreModule,
        SharedModule,
        AngularMaterialModule,
    ]
})
export class StudentsModule { }
