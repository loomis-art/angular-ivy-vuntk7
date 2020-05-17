import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProfileApp, ProfileFirma } from '../../hive/lib/types/models';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { ResultViewModel, ResultViewModelGeneric } from '../../hive/lib/types';

@Injectable({providedIn: 'root'})
export class FirmaService implements OnDestroy {
    private lastCall = undefined;

    constructor(private http: HttpClient) {
    }

    /*
     * Service wide Application List
     *
     */
    GetFirmaList(parameters?: any): Observable<ResultViewModelGeneric<ProfileFirma[]>> {
        // TODO:@mkan .. environment.serverDataTimeout implementation...
        return this.http.post<ResultViewModelGeneric<ProfileFirma[]>>(
            '/api/firma/listesi', parameters);
    }

    ngOnDestroy(): void {
        // unsubscribe to ensure no memory leaks
    }
}
