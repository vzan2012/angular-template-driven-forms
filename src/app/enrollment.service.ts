import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private _url: string = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post<any>(this._url, user).pipe(catchError(this.errorHandler));
  }

  errorHandler = (error: HttpErrorResponse) => throwError(true)

}
