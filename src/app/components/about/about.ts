import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  features = [
    { icon: '🎯', title: 'Mission', description: 'Delivering excellence in web development with cutting-edge Angular technology' },
    { icon: '💡', title: 'Innovation', description: 'Constantly exploring new frameworks and best practices' },
    { icon: '🚀', title: 'Performance', description: 'Building fast, scalable, and responsive applications' },
    { icon: '🤝', title: 'Collaboration', description: 'Working together to create amazing digital experiences' }
  ];

  stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Team Members' }
  ];
}
