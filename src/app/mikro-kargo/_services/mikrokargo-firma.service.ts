import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/services/applications.service';
import { ProfileApp, ProfileFirma } from 'src/hive/lib/types/models';
import { MikroKargoModule } from 'src/app/mikro-kargo/mikro-kargo.module';
import { FirmaService } from 'src/app/services/firma.service';

@Injectable({providedIn: MikroKargoModule})
export class MikroKargoFirmaService {
    anaFirmaListesi: ProfileFirma[];
    private appName = 'MIKROKARGO';
    private application: ProfileApp;

    constructor(
        private appService: ApplicationService,
        private firmaService: FirmaService
    ) {
        appService.GetApplicationList().subscribe(appsResult => {
            if (appsResult && !appsResult.HasError) {
                this.application = appsResult.data.filter(f => {
                    return f.Ad === this.appName;
                })[0];
                this.AnaFirmaListesi();
            }
        });
    }

    /*
     * Guid? ApplicationId
     * bool? SubeliFirma
     */
    AnaFirmaListesi() {
        return this.firmaService
            .GetFirmaList({SubeliFirma: true, ApplicationId: this.application.Id})
            .subscribe((response) => {
                console.log('AnaFirmaListesi', response.data);

                this.anaFirmaListesi = response.data;
            });
    }

    /*
     * Guid? ApplicationId
     * bool? SubeliFirma
     */
    FirmaListesi() {
        return this.firmaService
            .GetFirmaList({ApplicationId: this.application.Id})
            .subscribe((response) => {
                console.log('AnaFirmaListesi', response.data);

                this.anaFirmaListesi = response.data;
            });
    }
}
