import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './components/app-routing.module';
import { ApiService } from './modules/shared/provider/api.service';
import { APP_COMPONENTS, AppComponent } from './components/index';
import { SHARED_COMPONENTS } from './components/shared/index';
import { reducers } from './modules/ngrx/index';
import { TaxSlabModule, TaxSlabEffects } from './modules/taxSlab/index';
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
    StoreModule.forRoot({ reducers }, {}),
    EffectsModule.forRoot([TaxSlabEffects])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
