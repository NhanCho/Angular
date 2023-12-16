import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListProductComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


 
}
