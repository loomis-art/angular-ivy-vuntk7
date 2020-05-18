import { Component, OnInit } from '@angular/core';
import { MikroKargoFirmaService } from '../../_services/mikrokargo-firma.service';

@Component({
  selector: 'app-firma-listesi',
  templateUrl: './firma-listesi.component.html',
  styleUrls: ['./firma-listesi.component.scss']
})
export class FirmaListesiComponent implements OnInit {

  constructor(
      public mikroKargoFirmaService: MikroKargoFirmaService) {

  }

  ngOnInit(): void {
  }


}
