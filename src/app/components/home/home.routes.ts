import { HomeComponent } from './home.component';
import { AuthGuard } from '../../modules/shared/gards/auth.guard';

export const HomeRoutes: Array<any> = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];
