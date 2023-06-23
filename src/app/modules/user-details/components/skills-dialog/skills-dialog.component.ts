import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skills } from 'src/app/interfaces/skills';


@Component({
  selector: 'app-skills-dialog',
  templateUrl: './skills-dialog.component.html',
  styleUrls: ['./skills-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillsDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<SkillsDialogComponent>) {

  }
  ngOnInit(): void {
    this.skills = this.data.skills;
    this.addedSkills = this.data.addedSkills;
  }

  skills: Skills[];
  addedSkills: Skills[];
  selectedSkills: any[] = [];
  removeSelectedSkills: any[] = [];

  addSkills(): void {
    this.addedSkills = this.addedSkills.concat(this.skills.filter((item) => this.selectedSkills.includes(item.skillId.toString())));
    this.skills = this.skills.filter(item => !this.selectedSkills.includes(item.skillId.toString()));
    this.selectedSkills = [];

  }
  removeSkills(): void {
    this.skills = this.skills.concat(this.addedSkills.filter((item) => this.removeSelectedSkills.includes(item.skillId.toString())));
    this.addedSkills = this.addedSkills.filter(item => !this.removeSelectedSkills.includes(item.skillId.toString()));
    this.removeSelectedSkills = [];
  }

  skillChanged(event: any) {
    if (event.checked) {
      this.selectedSkills.push(event.value);
    }
    else {
      var index = this.selectedSkills.indexOf(event.value);

      if (index > -1) {
        this.selectedSkills.splice(index, 1);
      }
    }

  }

  removeSkillChanged(event: any) {
    if (event.checked) {
      this.removeSelectedSkills.push(event.value);
    }
    else {
      var index = this.removeSelectedSkills.indexOf(event.value);

      if (index > -1) {
        this.removeSelectedSkills.splice(index, 1);
      }
    }
  }
  save() {
    this.dialogRef.close({ data: { save: true, skills: this.skills, addedSkills: this.addedSkills } })
  }
  cancel() {
    this.dialogRef.close({ data: { save: false } })
  }

}
