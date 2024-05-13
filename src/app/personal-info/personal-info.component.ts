import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  fullName: string = 'Бондарь Илья Александрович';
  phoneNumber: string = '+380968220027';
  city: string = 'Одесса';
}
