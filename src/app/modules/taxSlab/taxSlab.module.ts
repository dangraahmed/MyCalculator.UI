import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// app
import { TAX_SLAB_PROVIDERS } from './services/index';

@NgModule({
  imports: [
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
