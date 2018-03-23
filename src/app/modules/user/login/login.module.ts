import { NgModule } from '@angular/core';

// app
import { LoginService } from './services/login.services';

@NgModule({
    providers: [
        LoginService
    ],
})
export class LoginModule {
    constructor() { }
}
