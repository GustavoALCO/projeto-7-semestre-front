import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'app-input-cargo',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './input-cargo.component.html',
  styleUrl: './input-cargo.component.scss'
})
export class InputCargoComponent {
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Vendedor'}, {name: 'Admin'}, ];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
