import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FeatureModule } from './components/features/feature.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FeatureModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient],
})
export class AppComponent {
  title = 'my-app';
}
