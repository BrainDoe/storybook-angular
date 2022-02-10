import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import UiService from 'src/app/service/ui.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  subscription: Subscription;
  showSideNav!: boolean;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) => (this.showSideNav = value));
  }

  ngOnInit(): void {
  }

  closeSideNav() {
    this.showSideNav = !this.showSideNav;
  }

}
