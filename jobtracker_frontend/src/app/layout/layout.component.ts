import { Component, signal } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { SidebarModule} from 'primeng/sidebar';
import { Home } from '@primeicons/angular/home';
import { Inbox } from '@primeicons/angular/inbox';
import { Search } from '@primeicons/angular/search';
import { Users } from '@primeicons/angular/users';
import { Bell } from '@primeicons/angular/bell';
import { Cog } from '@primeicons/angular/cog';
import { Sidebar } from '@primeicons/angular/sidebar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavMenuItem {
  icon: string;
  label: string;
  route: string;
}
@Component({
  standalone: true,
  imports: [SidebarModule, RouterLink, RouterLinkActive, RouterOutlet, ButtonDirective],
  selector: 'app-layout',
  styleUrl: './layout.component.css',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  activeMenu = signal('Home');
  open = signal(true);

  navMenuItems: NavMenuItem[] = [
    { icon: 'pi pi-home', label: 'Dashboard', route: '/dashboard' },
    { icon: 'pi pi-file-arrow-up', label: 'ApplicationsComponent', route: '/applications' },
    { icon: 'pi pi-chart-bar', label: 'AnalyticsComponent', route: '/analytics' },
    { icon: 'pi pi-cog', label: 'SettingsComponent', route: '/settings' },
    { icon: 'pi pi-user', label: 'ProfileComponent', route: '/profile' },
  ];

  checkMenu(menu: string) {
    return menu === this.activeMenu();
  }

  setMenu(menu: string) {
    this.activeMenu.set(menu);
  }
}
