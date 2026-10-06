import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { Sidebar, SidebarAside, SidebarContent, SidebarFooter, SidebarHeader, SidebarLayout,
  SidebarMain, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarPanel, SidebarSpacer
} from 'primeng/sidebar';

@Component({
  imports: [
    ButtonDirective,
    SidebarLayout,
    Sidebar,
    SidebarSpacer,
    SidebarAside,
    SidebarPanel,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarMain,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  ],
  selector: 'app-layout',
  styleUrl: './layout.component.css',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
