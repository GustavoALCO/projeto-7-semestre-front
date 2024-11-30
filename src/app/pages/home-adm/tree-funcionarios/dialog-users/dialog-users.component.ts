import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-users',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog-users.component.html',
  styleUrl: './dialog-users.component.scss'
})
export class DialogUsersComponent {
  id!:string

  private route = inject(Router) 
  
  dialog = inject(MatDialogRef)
  
  AlterarLoja() {
    if (this.id !== undefined) {
      this.route.navigate([`adm/user/${this.id}`]);
    }
    this.dialog.close();
  }
}
