import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { EMPTY, Observable, catchError, filter } from "rxjs";
import { BASE_URL_TOKEN } from "./config";

@Injectable({
  providedIn: 'root'
})

export class CustomInterceptor implements HttpInterceptor {

  // @Inject(BASE_URL_TOKEN) private baseUrl!: string

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json');
    
    const jsonReq = req.clone({
      // url: `${this.baseUrl}${req.url}`,
      // headers
    })

    return next.handle(jsonReq)
      .pipe(
        filter((e: HttpEvent<any>) => {
          return e instanceof HttpResponse
        }), catchError(() => {
          return EMPTY
        })
      )
  }
}