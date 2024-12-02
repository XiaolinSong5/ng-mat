import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-clip-board',
  standalone: true,
  imports: [ClipboardModule,
  FormsModule],
  templateUrl: './clip-board.component.html',
  styleUrl: './clip-board.component.css'
})
export class ClipBoardComponent {
  value = "Stop the war";

}
