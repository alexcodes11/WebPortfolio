import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent  {
  @ViewChild('roadmapTrack') roadmapTrack!: ElementRef;

  scrollTrack(amount: number) {
    this.roadmapTrack.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  }
}

