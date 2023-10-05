import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject, Subscription, map } from 'rxjs';
import { Router } from '@angular/router';
enum Status {
  CC_DENIED = 'CC_DENIED',
}

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  isApproved$ = new Subject<boolean>();
  sub: Subscription;
  constructor(private api: ApiService, protected router: Router) {
    this.sub = this.isApproved$.subscribe((v) => console.log(v));
  }

  isApproveApplication(applicationId: number): Observable<any> {
    return this.api.getAllApplications().pipe(
      map((items: any[]) => {
        const application = items.find((v) => v.id == applicationId);
        if (!application) {
          this.isApproved$.next(false);
          return false;
        }

        const result = application.status === Status.CC_DENIED ? false : true;
        return result;
      })
    );
  }
}
