import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { MotosService } from '../../../../Services/motos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.scss'
})
export class DialogDeleteComponent {
  id!:string

  private motos = inject(MotosService) 
  
  dialog = inject(MatDialogRef)
  
  Delete(){
    
    if(this.id !== undefined && this.id.length === 36)
      this.motos.DeleteMotos(this.id).subscribe(() =>{
        alert("Anuncio Apagado Com Sucesso");
      });
    this.dialog.close()
  }
}
