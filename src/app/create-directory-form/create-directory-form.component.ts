import { Component } from '@angular/core';

@Component({
  selector: 'app-create-directory-form',
  templateUrl: './create-directory-form.component.html',
  styleUrls: ['./create-directory-form.component.scss']
})
export class CreateDirectoryFormComponent {
  selectedValue = null;
  date = null;

  constructor() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
