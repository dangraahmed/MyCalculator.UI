import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './provider/api.service';
import { AuthGuard } from './gards/auth.guard';

@NgModule({
    imports: [
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule
    ],
    providers: [
        ApiService,
        AuthGuard
    ],

})
export class SharedModule {

}
