import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-input-loja',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './input-loja.component.html',
  styleUrl: './input-loja.component.scss'
})
export class InputLojaComponent {

}
