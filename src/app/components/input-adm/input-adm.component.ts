import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-adm',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './input-adm.component.html',
  styleUrl: './input-adm.component.scss'
})
export class InputAdmComponent {
@Input()
lable!:string;

}
