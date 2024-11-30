import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-alterate-store',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog-alterate-store.component.html',
  styleUrl: './dialog-alterate-store.component.scss'
})
export class DialogAlterateStoreComponent {
  id!:string

  private route = inject(Router) 
  
  dialog = inject(MatDialogRef)
  
  AlterarLoja() {
    if (this.id !== undefined) {
      this.route.navigate([`adm/Store/${this.id}`]);
    }
    this.dialog.close();
  }
}