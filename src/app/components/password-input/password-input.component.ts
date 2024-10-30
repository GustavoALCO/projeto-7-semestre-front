import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
