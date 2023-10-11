import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, map} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  id!: number;
  constructor(
    private apiService: ApiService
  ) { }


  isReady(id: number): Observable<boolean> {
    return this.apiService.getApplicationsById(id)
      .pipe(map((application) => {
        if (!application || !application.credit) {
         return false
        } 
        return true
      }))
  }
}