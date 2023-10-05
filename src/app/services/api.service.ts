import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

export interface Prescoring {
  term: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  birthdate: Date;
  passportSeries: number;
  passportNumber: number;
}

export interface UserInfo {
  applicationId: string;
  dependentAmount: number;
  employment: {
    employmentStatus: string;
    employerINN: string;
    salary: number;
    position: string;
  };
  gender: string;
  maritalStatus: string;
  passportIssueBranch: string;
  passportIssueDate: string;
}

export interface Offer {
  applicationId: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  server: string = 'http://localhost:8080';
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=18');
  }

  getCurrency(): Observable<any> {
    return this.http.get('https://www.cbr-xml-daily.ru/daily_json.js');
  }

  subscribeEmail(email: string): Observable<any> {
    return this.http.post(`${this.server}/email`, email);
  }

  postApplication(data: Prescoring): Observable<Prescoring> {
    return this.http
      .post<Prescoring>(
        `${this.server}/application`,
        JSON.stringify(data),
        this.header
      )
      .pipe(catchError((err) => this.handleError(err)));
  }

  postApply(data: Offer): Observable<Offer> {
    return this.http.post<Offer>(
      `${this.server}/application/apply`,
      JSON.stringify(data),
      this.header
    );
  }

  putApplicationById(data: any): Observable<UserInfo> {
    return this.http
      .put<any>(
        `${this.server}/application/registration/${data.applicationId}`,
        JSON.stringify(data),
        this.header
      )
      .pipe(catchError((err) => this.handleError(err)));
  }

  postDocument(applicationId: number): Observable<any> {
    return this.http
      .post<any>(`${this.server}/document/${applicationId}`, null, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  postDeny(id: number): Observable<any> {
    return this.http
      .post<any>(`${this.server}/application/${id}/deny`, null, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  postSign(id: number): Observable<any> {
    return this.http
      .post<any>(`${this.server}/document/${id}/sign`, { id }, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  postCode(data: any) {
    return this.http
      .post<any>(
        `${this.server}/document/${data.applicationId}/sign/code`,
        Object.values(data.code).join(''),
        this.header
      )
      .pipe(catchError((err) => this.handleError(err)));
  }

  getScheduler(id: number): Observable<any> {
    return this.http
      .get(`${this.server}/admin/application/${id}`, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  getAuditAll(): Observable<any> {
    return this.http
      .get(`${this.server}/admin/audit/all`, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  getAllApplications(): Observable<any> {
    return this.http
      .get(`${this.server}/admin/application`, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  getApplicationsById(id: number): Observable<any> {
    return this.http
      .get(`${this.server}/admin/application/${id}`, this.header)
      .pipe(catchError((err) => this.handleError(err)));
  }

  handleError(err: any) {
    if (err.status == 500) {
      console.log('Ошибка сервера, попробуйте чуть позже');
    } else if (err.status == 400) {
      console.log('Некорректный запрос');
    } else if (err.status == 404) {
      console.log('Необходима авторизация');
    } else {
      console.log('Ошибка при отправке запроса');
    }
    return [];
  }
}
