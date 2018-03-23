import { TaxSlabViewComponent } from './view/taxSlab.view.component';
import { TaxSlabViewDetailComponent } from './viewDetail/taxSlab.detail.view.component';
import { TaxSlabAddEditComponent } from './addEdit/taxSlab.add.edit.component';
import { AuthGuard } from '../../modules/shared/gards/auth.guard';

export const TaxSlabRoutes: Array<any> = [
  {
    path: 'taxSlab',
    canActivate: [AuthGuard],
    children: [
      { path: 'view', component: TaxSlabViewComponent },
      { path: 'viewDetail', component: TaxSlabViewDetailComponent },
      { path: 'addEdit', component: TaxSlabAddEditComponent }
    ]
  }
];
