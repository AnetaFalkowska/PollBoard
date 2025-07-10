import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() inputType: string = 'text';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl('', { nonNullable: true });

}
