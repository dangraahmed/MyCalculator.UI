import { AdminComponent } from './admin.component';
import { TaxSlabRoutes } from '../taxSlab/taxSlab.routes';
import { LoginRoutes } from '../login/login.routes';

export const AdminRoutes: Array<any> = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      ...TaxSlabRoutes,
      ...LoginRoutes
    ]
  }
];
