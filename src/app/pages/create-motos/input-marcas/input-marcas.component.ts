import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'app-input-marcas',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './input-marcas.component.html',
  styleUrl: './input-marcas.component.scss'
})
export class InputMarcasComponent {
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Honda'}, {name: 'Yamaha'}, {name: 'Dafra'},{name: 'Suzuki'},
                    {name: 'Royal Enfield'},{name: 'Bmw'},{name: 'Bajaj'}];
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
