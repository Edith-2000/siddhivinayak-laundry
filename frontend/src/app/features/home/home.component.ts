import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/layout/header.component';
import { FooterComponent } from '../../core/layout/footer.component';
import { HeroComponent } from '../../shared/components/hero.component';
import { ServicesComponent } from '../../shared/components/services.component';
import { PricingComponent } from '../../shared/components/pricing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    PricingComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
