import { Component, inject } from '@angular/core';
import { StoreService } from '../../../../Services/store.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-delete-store',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog-delete-store.component.html',
  styleUrl: './dialog-delete-store.component.scss'
})
export class DialogDeleteStoreComponent {
  id!:number

  private store = inject(StoreService) 
  
  dialog = inject(MatDialogRef)
  
  Delete(){
    
    if(this.id !== undefined && this.id !== null)
      this.store.DeleteStore(this.id).subscribe(() =>{
        alert("Anuncio Apagado Com Sucesso");
      });
    this.dialog.close()
  }
}
