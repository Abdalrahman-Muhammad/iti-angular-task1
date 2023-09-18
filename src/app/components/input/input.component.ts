import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  text: string = 'What you will write will appear here';
  writefun(event: Event): void {
    this.text = (event.target as HTMLInputElement).value;
    if ((event.target as HTMLInputElement).value === '')
      this.text = 'What you will write will appear here';
  }
}
