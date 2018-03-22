import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from '../shared/ngrx/index';

let DEV_IMPORTS: any[] = [];

DEV_IMPORTS = [
  ...DEV_IMPORTS,
  StoreDevtoolsModule.instrument()
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    DEV_IMPORTS
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {

}
