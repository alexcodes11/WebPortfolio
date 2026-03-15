import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component'; // Adjust path as needed
import { ExperienceComponent } from './components/experience/experience.component';
import {FooterComponent} from "./components/footer/footer.component"; // Import it!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webportfolio';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // 1. Update Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('scroll-bar');
    if (bar) bar.style.width = scrolled + '%';

    // 2. Update Active Phase Text
    const phaseText = document.getElementById('active-phase');
    if (phaseText) {
      if (winScroll < 500) phaseText.innerText = 'CORE_SYSTEM.EXE';
      else if (winScroll < 1500) phaseText.innerText = 'ROADMAP_ACTIVE';
      else phaseText.innerText = 'CONNECTION_READY';
    }
  }

}
