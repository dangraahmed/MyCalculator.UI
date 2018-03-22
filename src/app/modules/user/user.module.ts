import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaxSlabModule } from './taxSlab/index';

@NgModule({
  imports: [
    TaxSlabModule
  ]
  
})
export class UserModule { 
  constructor(@Optional() @SkipSelf() parentModule: UserModule) {
    if (parentModule) {
      throw new Error('TaxSlabModule already loaded; Import in root module only.');
    }
  }
}
