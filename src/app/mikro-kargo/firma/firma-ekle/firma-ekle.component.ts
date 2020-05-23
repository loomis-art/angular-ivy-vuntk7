import { Component, OnInit } from "@angular/core";
import { ProfileFirma } from "../../../../hive/src/lib/lib/types/models";
import { MikroKargoFirmaService } from "../../_services/mikrokargo-firma.service";

@Component({
  selector: "app-firma-ekle",
  templateUrl: "./firma-ekle.component.html",
  styleUrls: ["./firma-ekle.component.scss"]
})
export class FirmaEkleComponent implements OnInit {
  firma: ProfileFirma = {
    Il: undefined,
    Ilce: undefined,
    MuhasebeMail: undefined,
    Telefon: undefined,
    VergiNumarasi: undefined,
    Yetkili: undefined,
    Adi: "",
    Adres: "",
    Adresler: [],
    Aktif: false,
    Aldiklari: [],
    Alici: false,
    AltFirmalar: [],
    ApplicationUserFirmas: [],
    BolgeAdi: "",
    BolgeIdd: 0,
    Faturalari: [],
    FirmaKodu: "",
    FirmaTuru: undefined,
    Gonderdikleri: [],
    Gonderici: false,
    Id: "",
    IletisimBilgileri: [],
    KargoKodu: "",
    Kargolari: [],
    KisaAdi: "",
    MKodu: "",
    MuhasebeKodu: "",
    MusteriTuru: "",
    SigortaFiyati: undefined,
    SozlesmeBaslangici: undefined,
    Sozlesmeleri: [],
    SozlesmeyiYapan: "",
    SubeAdi: "",
    SubeIdd: 0,
    SubeliFirma: false,
    Type: 0,
    Unvani: "",
    UpsKargo: undefined,
    VergiDairesi: "",
    VergiNo: "",
    YurticiKargo: undefined
  };

  files: any;

  constructor(public mikroKargoFirmaService: MikroKargoFirmaService) {}

  ngOnInit(): void {}

  SubeliFirmaDegisti(Subelimi: boolean) {
    if (Subelimi !== true) {
      this.firma.AnaFirmaId = undefined;
    }
  }

  onClick() {}
}
