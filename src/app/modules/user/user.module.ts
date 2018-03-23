import { NgModule } from '@angular/core';

import { TaxSlabModule } from './taxSlab/index';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    TaxSlabModule,
    LoginModule
  ]
  
})
export class UserModule { }
