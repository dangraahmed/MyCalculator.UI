import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HOME_COMPONENTS } from './home/index';
import { ADMIN_COMPONENTS } from './admin/index';


export const USER_COMPONENTS: any[] = [
  AppComponent,
  LoginComponent,
  ...HOME_COMPONENTS,
  ...ADMIN_COMPONENTS
];

export * from './app.component';
export * from './home/home.component';
export * from './admin/admin.component';
