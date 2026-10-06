import { Component, signal } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { SidebarModule} from 'primeng/sidebar';
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
  open = signal(true);

  navMenuItems: NavMenuItem[] = [
    { icon: 'pi pi-home', label: 'Dashboard', route: '/dashboard' },
    { icon: 'pi pi-file-arrow-up', label: 'Applications', route: '/applications' },
    { icon: 'pi pi-chart-bar', label: 'Analytics', route: '/analytics' },
    { icon: 'pi pi-cog', label: 'Settings', route: '/settings' },
    { icon: 'pi pi-user', label: 'Profile', route: '/profile' },
  ];
}
