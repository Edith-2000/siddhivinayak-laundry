import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  cta: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  plans: PricingPlan[] = [
    {
      id: 1,
      name: 'Essentials',
      price: 29,
      period: '/month',
      description: 'Perfect for occasional laundry needs',
      features: [
        'Up to 5 kg per wash',
        'Standard washing & folding',
        'Free pickup & delivery',
        'Email support',
        '5% loyalty discount'
      ],
      isPopular: false,
      cta: 'Get Started'
    },
    {
      id: 2,
      name: 'Professional',
      price: 59,
      period: '/month',
      description: 'Ideal for regular laundry requirements',
      features: [
        'Up to 15 kg per wash',
        'Wash, fold & iron service',
        'Free pickup & delivery',
        'Priority support',
        '10% loyalty discount',
        'Dry cleaning included'
      ],
      isPopular: true,
      cta: 'Start Free Trial'
    },
    {
      id: 3,
      name: 'Premium',
      price: 99,
      period: '/month',
      description: 'For comprehensive laundry solutions',
      features: [
        'Unlimited laundry weight',
        'All services included',
        'Same-day delivery available',
        '24/7 priority support',
        '15% loyalty discount',
        'Personal laundry assistant'
      ],
      isPopular: false,
      cta: 'Get Started'
    }
  ];
}
