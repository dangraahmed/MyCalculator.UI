import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './provider/api.service';

@NgModule({
    imports: [
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule
    ],
    providers: [ApiService],

})
export class SharedModule {

}
