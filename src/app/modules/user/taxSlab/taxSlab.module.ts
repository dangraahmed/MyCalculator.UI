import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

// app
import { TAX_SLAB_PROVIDERS } from './services/index';
import { TaxSlabEffects } from './effects/index';

@NgModule({
  imports: [
    EffectsModule.forRoot([TaxSlabEffects]),
  ],
  providers: [
    ...TAX_SLAB_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
  ]
  
})
export class TaxSlabModule { 
  constructor(@Optional() @SkipSelf() parentModule: TaxSlabModule) {
    if (parentModule) {
      throw new Error('TaxSlabModule already loaded; Import in root module only.');
    }
  }
}
