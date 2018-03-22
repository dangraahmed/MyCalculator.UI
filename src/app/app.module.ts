import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { AppRoutingModule } from './modules/shared/app-routing.module';
import { ApiService } from './modules/shared/provider/api.service';

import { APP_COMPONENTS, AppComponent } from './components/index';
import { SHARED_COMPONENTS } from './components/shared/index';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
