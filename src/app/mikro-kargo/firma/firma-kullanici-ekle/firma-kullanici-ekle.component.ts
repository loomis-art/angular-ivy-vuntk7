import { Component, OnInit } from "@angular/core";
import { IdentityApplicationUser, IdentityApplicationUserFirma, ProfileFirma } from '../../../../hive/lib/types/models';
import { MikroKargoFirmaService } from '../../_services/mikrokargo-firma.service';

@Component({
    selector: "app-firma-kullanici-ekle",
    templateUrl: "./firma-kullanici-ekle.component.html",
    styleUrls: ["./firma-kullanici-ekle.component.css"]
})
export class FirmaKullaniciEkleComponent implements OnInit {
    selectedFirmaId: string;
    PasswordHashCheck: string = undefined;
    // TODO: Use RegisterViewModel
    yeniKullanici: IdentityApplicationUser = {
        AccessFailedCount: 0,
        Adi: '',
        ApiUser: false,
        ApplicationUserApps: [],
        ApplicationUserClaims: [],
        ApplicationUserFirmas: [],
        ApplicationUserLogins: [],
        ApplicationUserRoles: [],
        ConcurrencyStamp: '',
        CreatedDate: undefined,
        Email: '',
        EmailConfirmed: false,
        Id: '',
        IletisimBilgileri: [],
        IsEnabled: false,
        LockoutEnabled: false,
        Mobile: '',
        Name: '',
        NormalizedEmail: '',
        NormalizedUserName: '',
        PasswordHash: '',
        PhoneNumber: '',
        PhoneNumberConfirmed: false,
        SecurityStamp: '',
        Soyadi: '',
        TwoFactorEnabled: false,
        UserName: ''
    };

    constructor(public mikroKargoFirmaService: MikroKargoFirmaService) {

    }

    ngOnInit() {
    }

    firmaChanged() {
        this.yeniKullanici.ApplicationUserApps =
            [{ApplicationUserId: null, ApplicationId: this.mikroKargoFirmaService.application.Id}]
        this.yeniKullanici.ApplicationUserFirmas =
            [{ApplicationUserId: null, FirmaId: this.selectedFirmaId}];
    }
}
