import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponentsComponent } from './block-components/block-components.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlockComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boxChallenge';
}
