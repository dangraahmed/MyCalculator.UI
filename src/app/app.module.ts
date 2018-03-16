import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './component/app-routing.module';

import { APP_COMPONENTS, AppComponent } from './component/index';
import { SHARED_COMPONENTS } from './component/shared/index';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
