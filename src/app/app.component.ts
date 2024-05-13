import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkExperienceComponent, } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkExperienceComponent, SkillsComponent, PersonalInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '09.05.2024-2';
}
