import { Component } from '@angular/core';

@Component({
  selector: 'app-create-group-form',
  templateUrl: './create-group-form.component.html',
  styleUrls: ['./create-group-form.component.scss']
})
export class CreateGroupFormComponent {
  selectedValue = null;
  date = null;

  constructor() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
