import { Component, Injectable, Input, NgModule, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import {
    DetailKita,
    DetailUlke,
    DetailIl,
    DetailIlce,
    ProfileModelsDetailParameterViewModel
} from '../../types/models';
import { FlexModule } from '@angular/flex-layout';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ResultViewModelGeneric } from '../../types';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'hive-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
    @ViewChild('ulkeTemplate') ulkeTemplate!: TemplateRef<any>;
    @ViewChild('ilTemplate') ilTemplate!: TemplateRef<any>;
    @ViewChild('ilceTemplate') ilceTemplate!: TemplateRef<any>;
    /*
      /
       */
    @Input() grup: string;
    @Input() fxLayout: 'row' | 'column';

    @Input() ulkeGoster: boolean;
    @Input() ulkeLabel: string;
    @Input() ilGoster: boolean;
    @Input() ilLabel: string;
    @Input() ilceGoster: boolean;
    @Input() ilceLabel: string;

    ulkeler: DetailUlke[] = [];
    selectedUlke: DetailUlke;
    iller: DetailIl[] = [];
    selectedIl: DetailIl;
    ilceler: DetailIlce[] = [];
    selectedIlce: DetailIlce;

    constructor(private detailService: DetailDataService) {
        this.fxLayout = 'column';
        this.ulkeLabel = 'Ülke';
        this.ilLabel = 'İl';
        this.ilceLabel = 'İlçe';

    }

    ilChanged($event) {
        console.log($event);
        this.selectedIlce = undefined;
        this.detailService.getIlceler($event.Id)
            .subscribe((response) => {
                    this.ilceler = response.Data;
                }
            );
    }


    ulkeChanged($event: any) {

    }

    ilceChanged($event) {
        console.log($event);
    }

    displayAdi(val) {
        return val && val.Adi ? val.Adi : '';
    }

    ngOnInit() {
        if (this.ulkeGoster === true) {
            this.detailService.getUlkeler()
                .subscribe((response) => {
                        this.ulkeler = response.Data;
                    }
                );
        } else {
            this.detailService.getUlkeler()
                .subscribe((response) => {
                        this.ulkeler = response.Data;
                        this.selectedUlke = this.ulkeler
                            .filter((ulke) => {
                                return ulke.Adi === 'Türkiye';
                            })[0];
                        this.detailService.getIller(this.selectedUlke.Id)
                            .subscribe((ilresponse) => {
                                    this.iller = ilresponse.Data;
                                }
                            );
                    }
                );
        }
    }

}

@NgModule({
    imports: [MaterialModule, CommonModule, FlexModule, FormsModule],
    exports: [DetailComponent],
    declarations: [DetailComponent]
})
export class DetailModule {
}

@Injectable({providedIn: DetailModule})
/*
İl İlçe vs....
 */
export class DetailDataService {
    constructor(private http: HttpClient) {
    }

    getKitalar(): Observable<ResultViewModelGeneric<DetailKita[]>> {
        return this.http.post<ResultViewModelGeneric<DetailKita[]>>(
            '/api/detail/kita-listesi', {});
    }

    getUlkeler(kitaId?: any): Observable<ResultViewModelGeneric<DetailUlke[]>> {
        return this.http.post<ResultViewModelGeneric<DetailUlke[]>>(
            '/api/detail/ulke-listesi', {ParentId: kitaId});
    }

    getIller(ulkeId?: any): Observable<ResultViewModelGeneric<DetailIl[]>> {
        return this.http.post<ResultViewModelGeneric<DetailIl[]>>(
            '/api/detail/il-listesi', {ParentId: ulkeId});
        // Test
        // const result: ResultViewModelGeneric<DetailIl[]> = {
        //     HasError: false,
        //     Data: [
        //         {Id: 'a1', Adi: 'AnkaraTest'},
        //         {Id: 'k1', Adi: 'KonyaTest'}]
        // };
        // return of(result);
    }

    getIlceler(ilId?: any): Observable<ResultViewModelGeneric<DetailIlce[]>> {
        return this.http.post<ResultViewModelGeneric<DetailIlce[]>>(
            '/api/detail/ilce-listesi', {ParentId: ilId});
        // Test
        // const result: ResultViewModelGeneric<DetailIlce[]> = {
        //     HasError: false,
        //     Data: [
        //         {Id: 'k1i1', IlId: 'k1', Adi: 'Konyaİlçe1'},
        //         {Id: 'k1i2', IlId: 'k1', Adi: 'Konyaİlçe2'},
        //         {Id: 'a1i1', IlId: 'a1', Adi: 'Ankaraİlçe1'},
        //         {Id: 'a1i2', IlId: 'a1', Adi: 'Ankaraİlçe2'}]
        //         .filter((t) => {
        //             return t.IlId === ilId;
        //         })
        // };
        // return of(result);
    }
}
