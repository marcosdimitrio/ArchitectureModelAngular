import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { StudentsModule } from './students/students.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        LayoutModule,

        HomeModule,
        StudentsModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
