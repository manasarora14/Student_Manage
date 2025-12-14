import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',     // <-- your file, not app.component.html
  imports: [RouterOutlet]        // <-- required for <router-outlet>
})
export class AppComponent {}
