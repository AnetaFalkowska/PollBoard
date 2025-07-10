import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() title: string = 'Click Me';
@Input() type: 'button' | 'submit' = 'button';
@Input() disabled: boolean = false;
}
