import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../../services/user-details.service';
import { UserDetails } from 'src/app/interfaces/user-details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PasswordDialogComponent } from '../../components/password-dialog/password-dialog.component';
import { Skills } from 'src/app/interfaces/skills';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { SkillsDialogComponent } from '../../components/skills-dialog/skills-dialog.component';
import { NotificationService } from 'src/shared/services/notification.service';
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    userId: number;
    userName: string;
    surname: string;
    userEmail: string;
    userDetails: UserDetails;
    userForm: FormGroup;
    countries: any[];
    cities: any[];
    availabilities: any[];
    allSkills: Skills[];
    userSkills: Skills[];
    remainingSkills: Skills[];
    addedSkillsString: string = '';
    addedSkillIds: number[];
    errorMessage = ErrorMessages;
    file: File;
    imageSrc: string | null | ArrayBuffer;

    constructor(
        public formValidationService: FormValidationService,
        public notify: NotificationService,
        private userDetailsService: UserDetailsService, private route: ActivatedRoute,
        public dialog: MatDialog,
        private formBuilder: FormBuilder) {
        this.route.params.subscribe(params => { this.userId = params['userId'] },
        );
    }

    ngOnInit(): void {
        this.loadCountry();
        this.loadAvailability();
        this.loadSkills();
        this.createUserForm();
        this.getUserDetails(this.userId);
    }
    createUserForm() {
        this.userForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            employeeId: ['', []],
            manager: ['', []],
            title: ['', []],
            department: ['', []],
            profileText: ['', [Validators.required]],
            whyVolunteer: ['', [Validators.required]],
            linkedIn: ['', []],
            country: ['', [Validators.required]],
            city: ['', [Validators.required]],
            availability: ['', []],
            skills: ['', []],
            //image: ['', []]
        });
    }

    openPasswordDialog() {
        this.dialog.open(PasswordDialogComponent, { data: { userId: this.userId } });
    }

    onImageChanged(event: any) {
        const file = event.target.files;
        if (file.length === 0) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (_event) => { this.imageSrc = reader.result }
        this.file = <File>event.target.files[0];
    }

    setUserForm() {
        this.userForm = this.formBuilder.group({
            name: [this.userDetails.name, [Validators.required]],
            surname: [this.userDetails.surname, [Validators.required]],
            employeeId: [this.userDetails.employeeId, []],
            manager: [this.userDetails.manager, []],
            title: [this.userDetails.title, []],
            department: [this.userDetails.department, []],
            profileText: [this.userDetails.profileText, [Validators.required]],
            whyVolunteer: [this.userDetails.whyVolunteer, [Validators.required]],
            linkedIn: [this.userDetails.linkedIn, []],
            country: [this.userDetails.countryId, [Validators.required]],
            city: [this.userDetails.cityId, [Validators.required]],
            availability: [this.userDetails.availability, []],
            skills: ['', []],
        });
    }

    openSkillDialog() {
        let dialogRef = this.dialog.open(SkillsDialogComponent, { data: { skills: this.remainingSkills, addedSkills: this.userSkills } });
        dialogRef.afterClosed().subscribe(result => {
            if (result.data.save) {
                this.remainingSkills = result.data.skills;
                this.userSkills = result.data.addedSkills;
                this.addedSkillIds = this.userSkills.map(skill => { return skill['skillId'] });
                this.userForm.get("skills")?.setValue(this.addedSkillIds.toString());
            }
        });
    }

    countryChanged(event: any) {
        this.userDetailsService.getCityList(Number(event)).subscribe({
            next: (res) => {
                this.cities = res.data;
            }
        });
        this.userForm.get("city")?.setValue('');
    }

    loadCountry() {
        this.userDetailsService.getCountryList().subscribe({
            next: (res) => {
                this.countries = res.data;
            },
            error: (err) => {
            }
        });
    }

    loadAvailability() {
        this.userDetailsService.getAvailability().subscribe({
            next: (res) => {
                this.availabilities = res.data;
            }
        });
    }

    loadSkills() {
        this.userDetailsService.getAllSkills().subscribe({
            next: (res) => {
                this.allSkills = res.data.map((skill: any) => { return <Skills>{ skillId: skill.skillId, skillName: skill.skillName } });
            }
        })
    }

    getUserDetails(userId: number) {
        this.userDetailsService.getUserDetails(userId).subscribe({
            next: (res) => {
                this.userDetails = {
                    userId: res.data.userId,
                    name: res.data.firstName,
                    surname: res.data.lastName,
                    employeeId: res.data.employeeId,
                    manager: res.data.manager,
                    title: res.data.title,
                    department: res.data.department,
                    profileText: res.data.profileText,
                    whyVolunteer: res.data.whyIVolunteer,
                    countryId: res.data.countryId,
                    cityId: res.data.cityId,
                    availability: res.data.availability,
                    linkedIn: res.data.linkedInUrl,
                    avatar: res.data.avatar
                }
                if (res.data.avatar === null) {
                    this.imageSrc = "../../../../../assets/Images/user-img-large.png"
                }
                else {
                    this.imageSrc = "../../../../../assets/Images/Avatar/" + res.data.avatar.substring(92);
                }
                this.userEmail = res.data.email;
                this.userName = res.data.firstName;
                this.surname = res.data.lastName;
                this.userSkills = res.data.userSkills.map((users: any) => { return <Skills>{ skillId: users.skillId, skillName: users.skill.skillName } });
                this.remainingSkills = this.allSkills.filter(skill => {
                    return !this.userSkills.some((res) => { return res.skillId == skill.skillId });
                })
                this.countryChanged(this.userDetails.countryId)
                this.setUserForm();
            }
        })
    }

    saveUserDetails() {
        if (this.userForm.valid) {
            const form = new FormData();
            if (!(typeof (this.file) == "undefined")) {
                form.append('image', this.file, this.file.name);
            }
            this.userDetails.name = this.userForm.get("name")?.value;
            this.userDetails.surname = this.userForm.get("surname")?.value;
            form.append('name', this.userForm.get("name")?.value);
            form.append('surname', this.userForm.get("surname")?.value);
            form.append('manager', this.userForm.get("manager")?.value);
            form.append('title', this.userForm.get("title")?.value);
            form.append('department', this.userForm.get("department")?.value);
            form.append('profileText', this.userForm.get("profileText")?.value);
            form.append('whyVolunteer', this.userForm.get("whyVolunteer")?.value);
            form.append('linkedIn', this.userForm.get("linkedIn")?.value);
            form.append('skills', this.userForm.get("skills")?.value);
            form.append('cityId', this.userForm.get("city")?.value.toString());
            form.append('countryId', this.userForm.get("country")?.value.toString());
            form.append('employeeId', this.userForm.get("employeeId")?.value.toString());
            form.append('userId', this.userId.toString());
            form.append('availability', this.userForm.get("availability")?.value);
            this.userDetailsService.updateUserProfile(form).subscribe({
                next: (res) => {
                    if (res.result) {
                        this.userName = this.userDetails.name;
                        this.surname = this.userDetails.surname;
                        this.notify.showSuccess(res.message)
                    }
                    else {
                        this.notify.showError(res.message)
                    }
                }

            })
        }

    }
}
