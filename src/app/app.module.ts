import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';



import { USER_COMPONENTS, AppComponent } from './components/index';
import { SHARED_COMPONENTS } from './components/shared/index';

@NgModule({
  declarations: [
    ...USER_COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  imports: [
    CoreModule,
    SharedModule,
    UserModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
