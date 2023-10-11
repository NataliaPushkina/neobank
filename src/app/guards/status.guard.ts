import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { StatusService } from '../services/status.service';

export const statusGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const statusService = inject(StatusService);
  const router = inject(Router);
  const id: number = route.params['applicationId'];
  statusService.isSuccessStatus(id).subscribe((success) => {
    if (success == false) {
      router.navigate(['/']);
    }
  });

  return statusService.isSuccessStatus(id);
};
