import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common'; // Needed for *ngIf and *ngFo

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  // Default to showing your software skills first
  activeTab: string = 'software';

  setTab(tabName: string) {
    this.activeTab = tabName;
  }

  // This is scrolli
  scrollToTarget(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', inline: "nearest" });
    }
  }

}
