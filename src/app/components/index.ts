import { AppComponent } from './app.component';
import { HOME_COMPONENTS } from './home/index';
import { ADMIN_COMPONENTS } from './admin/index';
import { TAX_SLAB_COMPONENTS } from './taxSlab/index';


export const APP_COMPONENTS: any[] = [
  AppComponent,
  ...HOME_COMPONENTS,
  ...ADMIN_COMPONENTS,
  ...TAX_SLAB_COMPONENTS
];

export * from './app.component';
export * from './home/home.component';
