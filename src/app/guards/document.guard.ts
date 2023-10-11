import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { DocumentService } from '../services/document.service';

export const documentGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const documentService = inject(DocumentService);
  const id: number = route.params['applicationId'];
  
  return documentService.isReady(id)
};