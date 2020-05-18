import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  HostBinding,
  ChangeDetectorRef
} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

// TODO: Change host with @HostListener
@Component({
  selector: "hive-page-header",
  host: { class: "hive-page-header" },
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnInit {
  @Input() title = "";
  @Input() subtitle = "";
  @Input() nav: string[] = [];
  @Input() showBreadCrumb = true;
  private unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {}
}
