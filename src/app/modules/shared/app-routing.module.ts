import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from '../../components/home/home.routes';
import { AdminRoutes } from '../../components/admin/admin.routes';
import { TaxSlabRoutes } from '../../components/taxSlab/taxSlab.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...HomeRoutes,
  ...AdminRoutes,
  ...TaxSlabRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
