import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './modules/shared/app-routing.module';
import { ApiService } from './modules/shared/provider/api.service';
import { APP_COMPONENTS, AppComponent } from './components/index';
import { SHARED_COMPONENTS } from './components/shared/index';

import { UserModule } from './modules/user/user.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
