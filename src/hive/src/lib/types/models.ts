export class ProfileAdres {
    Adres1: string;
    Adres2: string;
    Postakodu: string;
    FirmaId: string; // Guid
    Firma: ProfileFirma;
    UlkeId: string; // Guid
    Ulke: DetailUlke;
    IlId: string; // Guid
    Il: DetailIl;
    IlceId: string; // Guid
    Ilce: DetailIlce;
    fatura: boolean;
    gonderi: boolean;
    Aciklama: string;
    Id: string; // Guid
}

export class ProfileApp {
    Ad: string;
    Description: string;
    ApplicationUserApps: IdentityApplicationUserApp[]; // Identity.ApplicationUserApp
    Id: string; // Guid
}

export class ProfileFirma {
    AnaFirmaId?: string; // Guid
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
    FirmaTuru: 'GöndericiAliciFirma' | 'KargoFirmasi'; // KanpinarCoreEnumsFirmaTuru
    MusteriTemsilcisiId?: number;
    Aktif: boolean;
    Type: number;
    Adi: string;
    Adres: string;
    SubeIdd: number;
    SubeAdi: string;
    BolgeIdd: number;
    BolgeAdi: string;
    AltFirmalar: ProfileFirma[]; // Profile.Firma
    Adresler: ProfileAdres[]; // Profile.Adres
    IletisimBilgileri: ProfileFirmaIletisimBilgi[]; // Profile.FirmaIletisimBilgi
    ApplicationUserFirmas: IdentityApplicationUserFirma[]; // Identity.ApplicationUserFirma
    Gonderdikleri: LdkGonderi[]; // Ldk.Gonderi
    Aldiklari: LdkGonderi[]; // Ldk.Gonderi
    Faturalari: LdkGonderi[]; // Ldk.Gonderi
    Kargolari: LdkGonderi[]; // Ldk.Gonderi
    Sozlesmeleri: ProfileSozlesme[]; // Profile.Sozlesme
    Id: string; // Guid
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
    IlatisimTuru: 'Telefon' | 'Fax' | 'CepTelefonu' | 'Email'; // KanpinarCoreEnumsIletisimTuru
    IletisimBilgisi: string;
    Aciklama: string;
    Sira: number;
    FirmaId: string; // Guid
    Firma: ProfileFirma;
    Aktif: boolean;
    Id: string; // Guid
}

export class ProfileKisiIletisimBilgi {
    IletisimTuru: 'Telefon' | 'Fax' | 'CepTelefonu' | 'Email'; // KanpinarCoreEnumsIletisimTuru
    IletisimBilgisi: string;
    Aciklama: string;
    Sira: number;
    ApplicationUserId: string; // Guid
    User: IdentityApplicationUser;
    Aktif: boolean;
    Id: string; // Guid
}

export class ProfileSozlesme {
    FirmaId: string; // Guid
    Firma: ProfileFirma;
    SozlemeGecerlilikBaslangic: Date;
    SozlemeGecerlilikBitis: Date;
    KargoDahil: boolean;
    SabitKargoUcretli: boolean;
    SabitKargoUcreti: number; // Decimal
    SabitKargoUcretiDovizCinsi: number;
    MinDeger: number; // Decimal
    MaxDeger: number; // Decimal
    SigortaBedeli: number; // Decimal
    DesiBasina: number; // Decimal
    SozlesmeFiyatAraliklari: ProfileSozlesmeFiyatAraligi[]; // Profile.SozlesmeFiyatAraligi
    SozlesmeKargoFirmaFiyatlari: ProfileSozlesmeKargoFirmaFiyat[]; // Profile.SozlesmeKargoFirmaFiyat
    Aktif: boolean;
    suresigecmis: boolean;
    Id: string; // Guid
}

export class ProfileSozlesmeFiyatAraligi {
    SozlemeId: string; // Guid
    Sozleme: ProfileSozlesme;
    min: number; // Decimal
    max: number; // Decimal
    fiyat: number; // Decimal
    DovizCinsi: number;
    Id: string; // Guid
}

export class ProfileSozlesmeKargoFirmaFiyat {
    SozlemeId: string; // Guid
    Sozleme: ProfileSozlesme;
    KargoFirmaId: number;
    KargoFirma: ProfileFirma;
    Fiyat: number; // Decimal
    DovizCinsi: number;
    Id: string; // Guid
}

export class ProfileModelsDetailParameterViewModel {
    Id?: string;  // Guid
    ParentId?: string;  // Guid
}

export class LdkGonderi {
    IslemTarihi: Date;
    source: string;
    GondericiFirmaId: string; // Guid
    GondericiFirma: ProfileFirma;
    GondericiFirmaKodu: string;
    GondericiFirmaAdi: string;
    GondericiAdres1: string;
    GondericiAdres2: string;
    GondericiPostakodu: string;
    GondericiUlkeId: string; // Guid
    GondericiUlkeKodu: string; // Guid
    GondericiUlke: string;
    GondericiIlId: string; // Guid
    GondericiIlKodu: number;
    GondericiIl: string;
    GondericiIlceId: string; // Guid
    GondericiIlceKodu: number;
    GondericiIlce: string;
    GondericiVergiDairesi: string;
    GondericiVergiNo: string;
    AliciFirmaId: string; // Guid
    AliciFirmaKodu: string;
    AliciFirmaAdi: string;
    AliciFirma: ProfileFirma;
    AliciAdres1: string;
    AliciAdres2: string;
    AliciPostakodu: string;
    AliciUlkeId: string; // Guid
    AliciUlkeKodu: number;
    AliciUlke: string;
    AliciIlId: string; // Guid
    AliciIlKodu: number;
    AliciIl: string;
    AliciIlceId: string; // Guid
    AliciIlceKodu: number;
    AliciIlce: string;
    AliciVergiDairesi: string;
    AliciVergiNo: string;
    FaturaFirmaId: string; // Guid
    FaturaFirmaKodu: string;
    FaturaFirmaAdi: string;
    FaturaFirma: ProfileFirma;
    FaturaAdres1: string;
    FaturaAdres2: string;
    FaturaPostakodu: string;
    FaturaUlkeId: string; // Guid
    FaturaUlkeKodu: number;
    FaturaUlke: string;
    FaturaIlId: string; // Guid
    FaturaIlKodu: number;
    FaturaIl: string;
    FaturaIlceId: string; // Guid
    FaturaIlceKodu: number;
    FaturaIlce: string;
    FaturaVergiDairesi: string;
    FaturaVergiNo: string;
    DovizCinsi: number;
    UrunId: string; // Guid
    Urun: DetailUrun;
    MalBedeli: number; // Decimal
    OdemeTuru: string | 'AÖ' | 'GÖ' | 'SAÖ' | 'SGÖ' | 'TG';
    Aciklama: string;
    Iptal: boolean;
    KargoFirmaId: string; // Guid
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
    totalAmount: number; // Decimal
    totalDesi: number; // Decimal
    totalDesiKg: number; // Decimal
    totalKg: number; // Decimal
    totalPrice: number; // Decimal
    totalVat: number; // Decimal
    cargoEventExplaination: string;
    cargoReasonExplaination: string;
    cargoReasonId: string;
    cargoEventName: string;
    cargoEventId: string;
    OperationCode: number;
    KargoDurumlari: LdkGonderiKargoDurum[]; // Ldk.GonderiKargoDurum
    topluid: string;
    SozlesmeNo: number;
    SozlesmeTipi: string;
    SigortaBedeli: number; // Decimal
    SigortaUcreti: number; // Decimal
    ExtraDesi: number; // Decimal
    ExtraDesiBasina: number; // Decimal
    ExtraDesiUcreti: number; // Decimal
    KargoUcreti: number; // Decimal
    KargoUcretDovizCinsi: number;
    ToplamKargoUcreti: number; // Decimal
    ToplamUcret: number; // Decimal
    Ekip: string;
    MarketplaceNumarasi: string;
    Sirasi: number;
    UserId?: string; // Guid
    UserFirmaId?: string; // Guid
    Mail: boolean;
    MailDate?: Date;
    OdemeYapildi: boolean;
    MuhaseKaydiYapildi: boolean;
    LdkKargoCheckState: number;
    LdkKargoCheckTime: Date;
    ShipmentNo: string;
    barcode: string;
    barcodeurl: string;
    Id: string; // Guid
}

export class LdkGonderiKargoDurum {
    GonderiId: number;
    KargoDurumu: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    CreatedBy: string;
    UpdatedBy: string;
    Id: string; // Guid
}

export class IdentityApplicationClaim {
    ClaimType: string;
    ClaimValue: string;
    Id: string; // Guid
}

export class IdentityApplicationRole {
    Description: string;
    ApplicationRoleClaims: IdentityApplicationRoleClaim[]; // Identity.ApplicationRoleClaim
    ApplicationUserRoles: IdentityApplicationUserRole[]; // Identity.ApplicationUserRole
    Id: string; // Guid
    Name: string;
    NormalizedName: string;
    ConcurrencyStamp: string;
}

export class IdentityApplicationRoleClaim {
    Role: IdentityApplicationRole;
    Id: number;
    RoleId: string; // Guid
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
    ApplicationUserClaims: IdentityApplicationUserClaim[]; // Identity.ApplicationUserClaim
    ApplicationUserLogins: IdentityApplicationUserLogin[]; // Identity.ApplicationUserLogin
    ApplicationUserRoles: IdentityApplicationUserRole[]; // Identity.ApplicationUserRole
    IletisimBilgileri: ProfileKisiIletisimBilgi[]; // Profile.KisiIletisimBilgi
    ApplicationUserFirmas: IdentityApplicationUserFirma[]; // Identity.ApplicationUserFirma
    ApplicationUserApps: IdentityApplicationUserApp[]; // Identity.ApplicationUserApp
    Id: string; // Guid
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
    ApplicationId: string; // Guid
    Application?: ProfileApp;
    ApplicationUserId: string; // Guid
    User?: IdentityApplicationUser;
}

export class IdentityApplicationUserClaim {
    User: IdentityApplicationUser;
    Id: number;
    UserId: string; // Guid
    ClaimType: string;
    ClaimValue: string;
}

export class IdentityApplicationUserFirma {
    ApplicationUserId: string; // Guid
    FirmaId: string; // Guid
    User?: IdentityApplicationUser;
    Firma?: ProfileFirma;
}

export class IdentityApplicationUserGroup {
    Name: string;
    NormalizedName: string;
    Type: string;
    Id: string; // Guid
}

export class IdentityApplicationUserLogin {
    User: IdentityApplicationUser;
    LoginProvider: string;
    ProviderKey: string;
    ProviderDisplayName: string;
    UserId: string; // Guid
}

export class IdentityModelsApplicationUserRegisterViewModel {
    IsEnabled: boolean;
    Adi: string;
    Soyadi: string;
    Mobile: string;
    Email: string;
    BolgeId?: number;
    SubeId?: number;
    ApiUser?: boolean;
    Sifre: string;
    FirmaId?: string;  // Guid
    ApplicationId?: string;  // Guid
    KullaniciTuru: 'LoomisAdmin' | 'LoomisSupervisor' | 'LoomisUser' | 'CustomerAdmin' | 'CustomerSupervisor' | 'CustomerUser'; // IdentityModelsKullaniciTuru
}

export class IdentityApplicationUserRole {
    Role: IdentityApplicationRole;
    User: IdentityApplicationUser;
    UserId: string; // Guid
    RoleId: string; // Guid
}

export class IdentityApplicationUserToken {
    UserId: string; // Guid
    LoginProvider: string;
    Name: string;
    Value: string;
}

export class IdentityModelsApplicationUserViewModel {
    email: string;
    username: string;
    id: string; // Guid
    token: string;
}

export class IdentityModelsApplicationUserListViewModel {
    Email?: string;
    FirmaId?: string;  // Guid
    ApplicationId?: string;  // Guid
    KullaniciTuru?: 'LoomisAdmin' | 'LoomisSupervisor' | 'LoomisUser' | 'CustomerAdmin' | 'CustomerSupervisor' | 'CustomerUser'; // IdentityModelsKullaniciTuru
}

export class DetailIl {
    Adi: string;
    plaka?: number;
    UlkeId?: string; // Guid
    Ulke?: DetailUlke;
    Aktif?: boolean;
    upsid?: number;
    Ilceler?: DetailIlce[]; // Detail.Ilce
    Adresler?: ProfileAdres[]; // Profile.Adres
    Id: string; // Guid
}

export class DetailIlce {
    Adi: string;
    IlId?: string; // Guid
    Il?: DetailIl;
    Adresler?: ProfileAdres[]; // Profile.Adres
    Aktif?: boolean;
    upsid?: number;
    Id: string; // Guid
}

export class DetailKita {
    Adi: string;
    Id: string; // Guid
}

export class DetailUlke {
    Adi: string;
    Code: string;
    KitaId?: string; // Guid
    Kita: DetailKita;
    Iller: DetailIl[]; // Detail.Il
    Adresler: ProfileAdres[]; // Profile.Adres
    Aktif: boolean;
    Id: string; // Guid
}

export class DetailUrun {
    UrunKodu: string;
    UrunAdi: string;
    Kdv: number; // Decimal
    Otv: number; // Decimal
    Doviz: number;
    Aciklama: string;
    UrunGrupId?: number;
    UrunGrup: DetailUrunGrup;
    Aktif: boolean;
    Gonderiler: LdkGonderi[]; // Ldk.Gonderi
    Id: string; // Guid
}

export class DetailUrunGrup {
    UrunGrupKodu: string;
    UrunGrupAdi: string;
    Urunler: DetailUrun[]; // Detail.Urun
    Aktif: boolean;
    Id: string; // Guid
}
