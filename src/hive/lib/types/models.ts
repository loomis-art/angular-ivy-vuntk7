export class ProfileAdres {
  Adres1: string;
  Adres2: string;
  Postakodu: string;
  FirmaId: string; // guid
  Firma: ProfileFirma;
  UlkeId: string; // guid
  Ulke: DetailUlke;
  IlId: string; // guid
  Il: DetailIl;
  IlceId: string; // guid
  Ilce: DetailIlce;
  fatura: boolean;
  gonderi: boolean;
  Aciklama: string;
  Id: string; // guid
}

export class ProfileApp {
  Ad: string;
  Description: string;
  ApplicationUserApps: IdentityApplicationUserApp[]; // identity.ApplicationUserApp
  Id: string; // guid
}

export class ProfileFirma {
  AnaFirmaId?: string; // guid
  AnaFirma?: ProfileFirma;
  FirmaKodu: string;
  KisaAdi: string;
  Unvani: string;
  MuhasebeKodu: string;
  VergiDairesi: string;
  VergiNo: string;
  SubeliFirma: boolean;
  KargoKodu: string;
  MKodu: string;
  Alici: boolean;
  Gonderici: boolean;
  FirmaTuru: "GöndericiAliciFirma" | "KargoFirmasi"; // kanpinarCoreEnumsFirmaTuru
  MusteriTemsilcisiId?: number;
  Aktif: boolean;
  Type: number;
  Adi: string;
  Adres: string;
  SubeIdd: number;
  SubeAdi: string;
  BolgeIdd: number;
  BolgeAdi: string;
  AltFirmalar: ProfileFirma[]; // profile.Firma
  Adresler: ProfileAdres[]; // profile.Adres
  IletisimBilgileri: ProfileFirmaIletisimBilgi[]; // profile.FirmaIletisimBilgi
  ApplicationUserFirmas: IdentityApplicationUserFirma[]; // identity.ApplicationUserFirma
  Gonderdikleri: LdkGonderi[]; // ldk.Gonderi
  Aldiklari: LdkGonderi[]; // ldk.Gonderi
  Faturalari: LdkGonderi[]; // ldk.Gonderi
  Kargolari: LdkGonderi[]; // ldk.Gonderi
  Sozlesmeleri: ProfileSozlesme[]; // profile.Sozlesme
  Id: string; // guid
  MusteriTuru: string;
  SozlesmeBaslangici: Date;
  SozlesmeyiYapan: string;
  UpsKargo: any;
  YurticiKargo: any;
  SigortaFiyati: any;
  Ilce: any;
  Il: any;
  Telefon: any;
  Yetkili: any;
  VergiNumarasi: any;
  MuhasebeMail: any;
}

export class ProfileFirmaIletisimBilgi {
  IlatisimTuru: "Telefon" | "Fax" | "CepTelefonu" | "Email"; // kanpinarCoreEnumsIletisimTuru
  IletisimBilgisi: string;
  Aciklama: string;
  Sira: number;
  FirmaId: string; // guid
  Firma: ProfileFirma;
  Aktif: boolean;
  Id: string; // guid
}

export class ProfileKisiIletisimBilgi {
  IletisimTuru: "Telefon" | "Fax" | "CepTelefonu" | "Email"; // kanpinarCoreEnumsIletisimTuru
  IletisimBilgisi: string;
  Aciklama: string;
  Sira: number;
  ApplicationUserId: string; // guid
  User: IdentityApplicationUser;
  Aktif: boolean;
  Id: string; // guid
}

export class ProfileSozlesme {
  FirmaId: string; // guid
  Firma: ProfileFirma;
  SozlemeGecerlilikBaslangic: Date;
  SozlemeGecerlilikBitis: Date;
  KargoDahil: boolean;
  SabitKargoUcretli: boolean;
  SabitKargoUcreti: number; // decimal
  SabitKargoUcretiDovizCinsi: number;
  MinDeger: number; // decimal
  MaxDeger: number; // decimal
  SigortaBedeli: number; // decimal
  DesiBasina: number; // decimal
  SozlesmeFiyatAraliklari: ProfileSozlesmeFiyatAraligi[]; // profile.SozlesmeFiyatAraligi
  SozlesmeKargoFirmaFiyatlari: ProfileSozlesmeKargoFirmaFiyat[]; // profile.SozlesmeKargoFirmaFiyat
  Aktif: boolean;
  suresigecmis: boolean;
  Id: string; // guid
}

export class ProfileSozlesmeFiyatAraligi {
  SozlemeId: string; // guid
  Sozleme: ProfileSozlesme;
  min: number; // decimal
  max: number; // decimal
  fiyat: number; // decimal
  DovizCinsi: number;
  Id: string; // guid
}

export class ProfileSozlesmeKargoFirmaFiyat {
  SozlemeId: string; // guid
  Sozleme: ProfileSozlesme;
  KargoFirmaId: number;
  KargoFirma: ProfileFirma;
  Fiyat: number; // decimal
  DovizCinsi: number;
  Id: string; // guid
}

export class LdkGonderi {
  IslemTarihi: Date;
  source: string;
  GondericiFirmaId: string; // guid
  GondericiFirma: ProfileFirma;
  GondericiFirmaKodu: string;
  GondericiFirmaAdi: string;
  GondericiAdres1: string;
  GondericiAdres2: string;
  GondericiPostakodu: string;
  GondericiUlkeId: string; // guid
  GondericiUlkeKodu: string; // guid
  GondericiUlke: string;
  GondericiIlId: string; // guid
  GondericiIlKodu: number;
  GondericiIl: string;
  GondericiIlceId: string; // guid
  GondericiIlceKodu: number;
  GondericiIlce: string;
  GondericiVergiDairesi: string;
  GondericiVergiNo: string;
  AliciFirmaId: string; // guid
  AliciFirmaKodu: string;
  AliciFirmaAdi: string;
  AliciFirma: ProfileFirma;
  AliciAdres1: string;
  AliciAdres2: string;
  AliciPostakodu: string;
  AliciUlkeId: string; // guid
  AliciUlkeKodu: number;
  AliciUlke: string;
  AliciIlId: string; // guid
  AliciIlKodu: number;
  AliciIl: string;
  AliciIlceId: string; // guid
  AliciIlceKodu: number;
  AliciIlce: string;
  AliciVergiDairesi: string;
  AliciVergiNo: string;
  FaturaFirmaId: string; // guid
  FaturaFirmaKodu: string;
  FaturaFirmaAdi: string;
  FaturaFirma: ProfileFirma;
  FaturaAdres1: string;
  FaturaAdres2: string;
  FaturaPostakodu: string;
  FaturaUlkeId: string; // guid
  FaturaUlkeKodu: number;
  FaturaUlke: string;
  FaturaIlId: string; // guid
  FaturaIlKodu: number;
  FaturaIl: string;
  FaturaIlceId: string; // guid
  FaturaIlceKodu: number;
  FaturaIlce: string;
  FaturaVergiDairesi: string;
  FaturaVergiNo: string;
  DovizCinsi: number;
  UrunId: string; // guid
  Urun: DetailUrun;
  MalBedeli: number; // decimal
  OdemeTuru: string;
  Aciklama: string;
  Iptal: boolean;
  KargoFirmaId: string; // guid
  KargoFirma: ProfileFirma;
  KargoTakipKodu: string;
  MuhurNumarasi: string;
  PosetNumarasi: string;
  IletisimKisiAd: string;
  IletisimKisiCep: string;
  SonKargoDurumu: string;
  SonKargoDurumuCheck: Date;
  CargoKey: string;
  InvoiceKey: string;
  trackingUrl: string;
  totalAmount: number; // decimal
  totalDesi: number; // decimal
  totalDesiKg: number; // decimal
  totalKg: number; // decimal
  totalPrice: number; // decimal
  totalVat: number; // decimal
  cargoEventExplaination: string;
  cargoReasonExplaination: string;
  cargoReasonId: string;
  cargoEventName: string;
  cargoEventId: string;
  OperationCode: number;
  KargoDurumlari: LdkGonderiKargoDurum[]; // ldk.GonderiKargoDurum
  topluid: string;
  SozlesmeNo: number;
  SozlesmeTipi: string;
  SigortaBedeli: number; // decimal
  SigortaUcreti: number; // decimal
  ExtraDesi: number; // decimal
  ExtraDesiBasina: number; // decimal
  ExtraDesiUcreti: number; // decimal
  KargoUcreti: number; // decimal
  KargoUcretDovizCinsi: number;
  ToplamKargoUcreti: number; // decimal
  ToplamUcret: number; // decimal
  Ekip: string;
  MarketplaceNumarasi: string;
  Sirasi: number;
  UserId?: string; // guid
  UserFirmaId?: string; // guid
  Mail: boolean;
  MailDate?: Date;
  OdemeYapildi: boolean;
  MuhaseKaydiYapildi: boolean;
  LdkKargoCheckState: number;
  LdkKargoCheckTime: Date;
  ShipmentNo: string;
  barcode: string;
  barcodeurl: string;
  Id: string; // guid
}

export class LdkGonderiKargoDurum {
  GonderiId: number;
  KargoDurumu: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  CreatedBy: string;
  UpdatedBy: string;
  Id: string; // guid
}

export class IdentityApplicationClaim {
  ClaimType: string;
  ClaimValue: string;
  Id: string; // guid
}

export class IdentityApplicationRole {
  Description: string;
  ApplicationRoleClaims: IdentityApplicationRoleClaim[]; // identity.ApplicationRoleClaim
  ApplicationUserRoles: IdentityApplicationUserRole[]; // identity.ApplicationUserRole
  Id: string; // guid
  Name: string;
  NormalizedName: string;
  ConcurrencyStamp: string;
}

export class IdentityApplicationRoleClaim {
  Role: IdentityApplicationRole;
  Id: number;
  RoleId: string; // guid
  ClaimType: string;
  ClaimValue: string;
}

export class IdentityApplicationUser {
  IsEnabled: boolean;
  CreatedDate: Date;
  Adi: string;
  Soyadi: string;
  Mobile: string;
  BolgeId?: number;
  SubeId?: number;
  ApiUser: boolean;
  Name: string;
  ApplicationUserClaims: IdentityApplicationUserClaim[]; // identity.ApplicationUserClaim
  ApplicationUserLogins: IdentityApplicationUserLogin[]; // identity.ApplicationUserLogin
  ApplicationUserRoles: IdentityApplicationUserRole[]; // identity.ApplicationUserRole
  IletisimBilgileri: ProfileKisiIletisimBilgi[]; // profile.KisiIletisimBilgi
  ApplicationUserFirmas: IdentityApplicationUserFirma[]; // identity.ApplicationUserFirma
  ApplicationUserApps: IdentityApplicationUserApp[]; // identity.ApplicationUserApp
  Id: string; // guid
  UserName: string;
  NormalizedUserName: string;
  Email: string;
  NormalizedEmail: string;
  EmailConfirmed: boolean;
  PasswordHash: string;
  SecurityStamp: string;
  ConcurrencyStamp: string;
  PhoneNumber: string;
  PhoneNumberConfirmed: boolean;
  TwoFactorEnabled: boolean;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
}

export class IdentityApplicationUserApp {
  ApplicationId: string; // guid
  Application?: ProfileApp;
  ApplicationUserId: string; // guid
  User?: IdentityApplicationUser;
}

export class IdentityApplicationUserClaim {
  User: IdentityApplicationUser;
  Id: number;
  UserId: string; // guid
  ClaimType: string;
  ClaimValue: string;
}

export class IdentityApplicationUserFirma {
  ApplicationUserId: string; // guid
  FirmaId: string; // guid
  User?: IdentityApplicationUser;
  Firma?: ProfileFirma;
}

export class IdentityApplicationUserGroup {
  Name: string;
  NormalizedName: string;
  Type: string;
  Id: string; // guid
}

export class IdentityApplicationUserLogin {
  User: IdentityApplicationUser;
  LoginProvider: string;
  ProviderKey: string;
  ProviderDisplayName: string;
  UserId: string; // guid
}

export class IdentityApplicationUserRole {
  Role: IdentityApplicationRole;
  User: IdentityApplicationUser;
  UserId: string; // guid
  RoleId: string; // guid
}

export class IdentityApplicationUserToken {
  UserId: string; // guid
  LoginProvider: string;
  Name: string;
  Value: string;
}

export class IdentityModelsApplicationUserViewModel {
  email: string;
  username: string;
  id: string; // guid
  token: string;
}

export class DetailIl {
  Adi: string;
  plaka: number;
  UlkeId: string; // guid
  Ulke: DetailUlke;
  Aktif: boolean;
  upsid: number;
  Ilceler: DetailIlce[]; // detail.Ilce
  Adresler: ProfileAdres[]; // profile.Adres
  Id: string; // guid
}

export class DetailIlce {
  Adi: string;
  IlId: string; // guid
  Il: DetailIl;
  Adresler: ProfileAdres[]; // profile.Adres
  Aktif: boolean;
  upsid: number;
  Id: string; // guid
}

export class DetailKita {
  Adi: string;
  Id: string; // guid
}

export class DetailUlke {
  Adi: string;
  Code: string;
  KitaId?: string; // guid
  Kita: DetailKita;
  Iller: DetailIl[]; // detail.Il
  Adresler: ProfileAdres[]; // profile.Adres
  Aktif: boolean;
  Id: string; // guid
}

export class DetailUrun {
  UrunKodu: string;
  UrunAdi: string;
  Kdv: number; // decimal
  Otv: number; // decimal
  Doviz: number;
  Aciklama: string;
  UrunGrupId?: number;
  UrunGrup: DetailUrunGrup;
  Aktif: boolean;
  Gonderiler: LdkGonderi[]; // ldk.Gonderi
  Id: string; // guid
}

export class DetailUrunGrup {
  UrunGrupKodu: string;
  UrunGrupAdi: string;
  Urunler: DetailUrun[]; // detail.Urun
  Aktif: boolean;
  Id: string; // guid
}
