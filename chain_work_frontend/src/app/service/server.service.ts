import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppInfo, Talent } from '../interfaces/Objects';
import {
  delay,
  Observable,
  retryWhen,
  scan,
  throwError,
} from 'rxjs';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  URL: string = 'http://localhost:8081/api/v1/app';
  private freelance_Url: string = 'http://localhost:8081/api/v1/freelance/';


  contract = inject(ContractService)
  client = inject(HttpClient);

  changeBio(bio: string) {
    this.client.patch(`${this.freelance_Url}change_bio`,bio,{params:{userAddr:this.contract.getUserAddr()}})
  }

  changeUser(userName: string) {
this.client  }
  updateJobTitle(arg0: string) {
    throw new Error('Method not implemented.');
  }
  changeProfileImage(selectedFile: File | null) {
    throw new Error('Method not implemented.');
  }
  getTalent(userAddr: string) {
    return this.client
      .get<Talent>(`${this.freelance_Url}talent`, { params: { userAddr: userAddr } })
      .pipe(
        retryWhen((error) =>
          error.pipe(
            scan((count, error) => {
              if (count >= 4 || error.status) {
                throw error;
              } else {
                count++;
                return count;
              }
            }, 0),
            delay(500)
          )
        )
      );
  }

 

  login(userAddr: string): Observable<AppInfo> {
    return this.client
      .get<AppInfo>('http://localhost:8081/api/v1/app/login', {
        params: { userAddr: userAddr },
      })
      .pipe(
        retryWhen((error) =>
          error.pipe(
            scan((retryCount, error) => {
              if (retryCount >= 5 || error.status != 0) {
                throw error;
              } else {
                retryCount += 1;
                console.warn(`Retrying... Attempt #${retryCount}`);
                return retryCount;
              }
            }, 0),
            delay(500) // Delay 1/2 seconds
          )
        )
        // catchError(this.handleError)
      );
  }

  signup(userData: any, currentFile: any): Observable<string> {
    let formdata: FormData = new FormData();
    formdata.append('appDto', JSON.stringify(userData));
    formdata.append('file', currentFile);
    console.log('hey here it is ', currentFile);

    return this.client
      .post(`${this.URL}/signup`, formdata, {
        responseType: 'text',
        reportProgress: true,
      })
      .pipe(
        retryWhen((error) =>
          error.pipe(
            scan((retryCount, error) => {
              if (retryCount >= 5 || error.status != 0) {
                throw error;
              } else {
                retryCount += 1;
                console.warn(`Retrying... Attempt #${retryCount}`);
                return retryCount;
              }
            }, 0),
            delay(500) // Delay of 2 seconds
          )
        )
      );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('here is the error ', error.status);
    // if (error.error)
    return throwError('something went wrong');
  }
  constructor() {}
}
