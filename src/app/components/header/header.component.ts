import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import UiService from 'src/app/service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  sideNav: boolean = false;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) => (this.sideNav = value));
   }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.uiService.toggleSideNav();
  }


}
