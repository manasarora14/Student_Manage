import { Component, signal } from '@angular/core';
import { StudentService } from '../../services/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
})
export class RegisterComponent {

  email = signal('');
  password = signal('');
  message = signal('');

  constructor(private service: StudentService) {}

  register() {
    this.service.register(this.email(), this.password()).subscribe({
      next: () => this.message.set("User registered successfully!"),
      error: () => this.message.set("Error! Try again.")
    });
  }
}
