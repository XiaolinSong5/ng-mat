import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {ButtonComponent} from './button/button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    ProgressBarComponent,
    MatProgressSpinnerModule,
  ProgressSpinnerComponent,
  ButtonComponent,
  MatButtonToggleModule,
  FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-mat';
}
