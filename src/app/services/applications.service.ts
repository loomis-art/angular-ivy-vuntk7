import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProfileApp } from "../../hive/lib/types/models";
import { Observable, Subject } from "rxjs";
import { ResultViewModelGeneric } from "../../hive/lib/types";

@Injectable({ providedIn: "root" })
export class ApplicationService implements OnDestroy {
  private lastCall = undefined;
  private applicationsList = new Subject<ProfileApp[]>();

  constructor(private http: HttpClient) {}

  /*
   * Service wide Application List
   */
  GetApplicationList(): Observable<ResultViewModelGeneric<ProfileApp[]>> {
    return this.http.get<ResultViewModelGeneric<ProfileApp[]>>(
      "/api/application/list"
    );
    // tODO:@mkan .. environment.serverDataTimeout implementation...
    // if (environment.serverDataTimeout > 0 && // ServerTimeOut that i want to use so >0 defined in environment...
    //     this.lastCall && // I have a call already done. So check timeout next
    //     (moment().isAfter(moment(this.lastCall).add(environment.serverDataTimeout, 'millisecond')))) {
    //     return this.applicationsList.asObservable(); // If so, return cached data...
    // }// Othervise Return request...
    // else {
    //
    // }
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.applicationsList.unsubscribe();
  }
}
