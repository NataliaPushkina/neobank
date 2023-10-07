import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject, Subscription, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
export enum Status {
  //отклонен
  CC_DENIED = 'CC_DENIED',
  CLIENT_DENIED = 'CLIENT_DENIED',
  // выдан
  CREDIT_ISSUED = 'CREDIT_ISSUED',
  PREAPPROVAL = 'PREAPPROVAL',
  APPROVED = 'APPROVED',
}

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  status$ = new Subject<string>();
  constructor(
    private apiService: ApiService,
    protected router: Router,
    protected route: ActivatedRoute
  ) {}

  checkStatus(id: number): Observable<string> {
    return this.apiService.getApplicationsById(id).pipe(
      map((application) => {
        this.status$.next(application.status);
        return application.status;
      })
    );
  }

  isSuccessStatus(applicationId: number): Observable<any> {
    return this.apiService.getAllApplications().pipe(
      map((items: any[]) => {
        const application = items.find((v) => v.id == applicationId);
        if (!application) {
          return false;
        }
        return this.checkAvailability(application.status);
      })
    );
  }

  checkAvailability(statusValue: string): boolean {
    switch (statusValue) {
      case Status.CC_DENIED:
        return false;
      case Status.CLIENT_DENIED:
        return false;
      case Status.APPROVED:
        return true;
      case Status.PREAPPROVAL:
        return true;
      case Status.CREDIT_ISSUED:
        return true;
      default:
        return false;
    }
  }
}
