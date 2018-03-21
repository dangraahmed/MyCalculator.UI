import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './components/app-routing.module';
import { ApiService } from './modules/shared/provider/api.service';
import { APP_COMPONENTS, AppComponent } from './components/index';
import { SHARED_COMPONENTS } from './components/shared/index';
import { appReducers } from './modules/ngrx/index';
import { TaxSlabModule, TaxSlabEffects } from './modules/taxSlab/index';


let DEV_IMPORTS: any[] = [];

DEV_IMPORTS = [
  ...DEV_IMPORTS,
  StoreDevtoolsModule.instrument()
];



@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    TaxSlabModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TaxSlabEffects]),
    DEV_IMPORTS
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
