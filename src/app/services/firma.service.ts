import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProfileFirma } from "../../hive/src/lib/lib/types/models";
import { Observable } from "rxjs";
import { ResultViewModelGeneric } from "../../hive/src/lib/lib/types";

@Injectable({ providedIn: "root" })
export class FirmaService implements OnDestroy {
  private lastCall = undefined;

  constructor(private http: HttpClient) {}

  /*
   * Service wide Application List
   *
   */
  GetFirmaList(
    parameters?: any
  ): Observable<ResultViewModelGeneric<ProfileFirma[]>> {
    // tODO:@mkan .. environment.serverDataTimeout implementation...
    return this.http.post<ResultViewModelGeneric<ProfileFirma[]>>(
      "/api/firma/listesi",
      parameters
    );
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
  }
}
