import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

export interface MenuItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isClosed: boolean = false;
  menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      link: 'dashboard',
      icon: './assets/images/icons/home-icon.svg'
    },
    {
      title: 'lists',
      link: 'lists',
      icon: './assets/images/icons/list-icon.svg'
    },
    {
      title: 'history',
      link: 'history',
      icon: './assets/images/icons/history-icon.svg'
    },
    {
      title: 'filters',
      link: 'filters',
      icon: './assets/images/icons/filters-icon.svg'
    },
    {
      title: 'chats',
      link: 'chat',
      icon: './assets/images/icons/chat-icon.svg'
    },
    {
      title: 'Settings',
      link: 'settings',
      icon: './assets/images/icons/settings-icon.svg'
    },
    {
      title: 'logout',
      link: 'logout',
      icon: './assets/images/icons/logout-icon.svg'
    }
  ];
  selectedMenuItem: string = 'dashboard';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateTo(link: string) {
    this.selectedMenuItem = link;
    this.router.navigate(['main/' + link]).catch(e => console.error(e));
  }

  toggleSideBar() {
    this.isClosed = !this.isClosed;
  }
}
