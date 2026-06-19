import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Wash & Fold',
      description: 'Professional washing and folding service with gentle care for all fabric types.',
      icon: '🧺'
    },
    {
      id: 2,
      title: 'Dry Cleaning',
      description: 'Expert dry cleaning for delicate and formal wear with precision finishing.',
      icon: '👔'
    },
    {
      id: 3,
      title: 'Express Delivery',
      description: 'Same-day delivery available for urgent laundry needs within the city.',
      icon: '🚚'
    },
    {
      id: 4,
      title: 'Stain Removal',
      description: 'Specialized stain treatment using eco-friendly solutions for stubborn marks.',
      icon: '✨'
    },
    {
      id: 5,
      title: 'Garment Repair',
      description: 'Professional mending and alterations to extend the life of your clothes.',
      icon: '🔧'
    },
    {
      id: 6,
      title: 'Subscription Plans',
      description: 'Flexible monthly plans for regular laundry needs at discounted rates.',
      icon: '📦'
    }
  ];
}
