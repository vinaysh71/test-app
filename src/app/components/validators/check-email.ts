import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, filter, map, Observable, of } from "rxjs";
import { LoggerService } from "src/app/services/logger.service";

@Injectable({
  providedIn: 'root'
})
export class CheckEmail implements AsyncValidator {
  constructor(private logger: LoggerService) { }

  validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
    // return this.logger.checkEmails().then((response: any) => response.length ? { emailTaken: true } : null)
    return this.logger.checkEmails()
      .pipe(
        map((response: any) => {
          let value = response.filter((o: any) => o.email === control.value)
          const obj = value?.length ? { emailTaken: true } : null
          console.log('obj is', obj);
          return obj
        }),
        catchError((err) => of(null)));
  }


}
