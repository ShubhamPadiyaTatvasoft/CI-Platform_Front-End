import { Component, Input } from '@angular/core';
import { Skills } from 'src/app/interfaces/skills';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent {
  constructor() { }
  @Input() skillsList: Skills[];


}
