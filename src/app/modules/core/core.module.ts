import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
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
        HttpModule,
        StoreModule.forRoot(appReducers),
        DEV_IMPORTS
      ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded; Import in root module only.');
    }
  }
}
