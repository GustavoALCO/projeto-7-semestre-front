import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
id!:string

private route = inject(Router) 

dialog = inject(MatDialogRef)

AlterarMotos(){
  if(this.id !== undefined && this.id.length === 36)
    this.route.navigate([`adm/moto/${this.id}`])
  this.dialog.close()
}
}
