import { NgModule } from '@angular/core';

// app
import { TAX_SLAB_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...TAX_SLAB_PROVIDERS
  ]
})
export class TaxSlabModule { }
