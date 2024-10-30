import { Component } from '@angular/core';
import { FetchMenuService } from '../fetch-menu.service';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [CommonModule, AccordionModule, AvatarModule, BadgeModule],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {

  constructor(private fetchMenuService: FetchMenuService) {}

  menu = this.fetchMenuService.getMenu();


}
