import { Component, Output,EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { faShoppingBasket, faUser,faCheckSquare,faBook} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import { ISideNavToggle } from './ISideNavToggle';



@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,RouterModule,FaIconComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',

})

export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<ISideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWith = 0;
  navData = navbarData;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWith = window.innerWidth;
    if(this.screenWith <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWith})
    }
  }

  ngOnInit(): void {
      this.screenWith = window.innerWidth;
  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWith})
    }
}
