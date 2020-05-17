import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProfileApp } from 'src/hive/lib/types/models';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { ResultViewModel, ResultViewModelGeneric } from 'src/hive/lib/types';

@Injectable({providedIn: 'root'})
export class ApplicationService implements OnDestroy {
    private lastCall = undefined;
    private applicationsList = new Subject<ProfileApp[]>();

    constructor(private http: HttpClient) {
    }

    /*
     * Service wide Application List
     */
    GetApplicationList(): Observable<ResultViewModelGeneric<ProfileApp[]>> {
        return this.http.get<ResultViewModelGeneric<ProfileApp[]>>(
            '/api/application/list'
        );
        // TODO:@mkan .. environment.serverDataTimeout implementation...
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