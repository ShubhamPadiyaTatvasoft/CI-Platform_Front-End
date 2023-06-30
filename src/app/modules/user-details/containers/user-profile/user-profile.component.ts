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
    avatar: string | undefined;
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
            countryId: ['', [Validators.required]],
            cityId: ['', [Validators.required]],
            availability: ['', []],
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
        reader.onload = (_event) => {
            this.imageSrc = reader.result
            this.avatar = _event?.target?.result?.toString();
        }
    }

    setUserForm() {
        this.userForm.setValue({
            name: this.userDetails.name,
            surname: this.userDetails.surname,
            employeeId: this.userDetails.employeeId,
            manager: this.userDetails.manager,
            title: this.userDetails.title,
            department: this.userDetails.department,
            profileText: this.userDetails.profileText,
            whyVolunteer: this.userDetails.whyVolunteer,
            linkedIn: this.userDetails.linkedIn,
            countryId: this.userDetails.countryId,
            cityId: this.userDetails.cityId,
            availability: this.userDetails.availability,
        });

    }

    openSkillDialog() {
        let dialogRef = this.dialog.open(SkillsDialogComponent, { data: { skills: this.remainingSkills, addedSkills: this.userSkills } });
        dialogRef.afterClosed().subscribe(result => {
            if (result.data.save) {
                this.remainingSkills = result.data.skills;
                this.userSkills = result.data.addedSkills;
                this.addedSkillIds = this.userSkills.map(skill => { return skill['skillId'] });
                this.addedSkillsString = this.addedSkillIds.toString();
            }
        });
    }

    countryChanged(event: any) {
        this.userDetailsService.getCityList(Number(event)).subscribe({
            next: (res) => {
                this.cities = res.data;
            }
        });
        this.userForm.get("cityId")?.setValue('');
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
                    this.imageSrc = "/assets/Images/user-img-large.png"
                }
                else {
                    this.imageSrc = res.data.avatar;
                }
                this.userEmail = res.data.email;
                this.userName = res.data.firstName;
                this.surname = res.data.lastName;
                this.userSkills = res.data.userSkills.map((users: any) => { return <Skills>{ skillId: users.skillId, skillName: users.skill.skillName } });
                this.addedSkillIds = this.userSkills.map(skill => skill["skillId"]);
                this.addedSkillsString = this.addedSkillIds.toString();
                this.remainingSkills = this.allSkills?.filter(skill => {
                    return !this.userSkills.some((res) => { return res.skillId == skill.skillId });
                })
                this.countryChanged(this.userDetails.countryId)
                this.setUserForm();
            }
        })
    }

    saveUserDetails() {
        if (this.userForm.valid) {
            this.userDetails = {
                availability: this.userForm.get("availability")?.value,
                name: this.userForm.get("name")?.value,
                surname: this.userForm.get("surname")?.value,
                manager: this.userForm.get("manager")?.value,
                title: this.userForm.get("title")?.value,
                department: this.userForm.get("department")?.value,
                profileText: this.userForm.get("profileText")?.value,
                whyVolunteer: this.userForm.get("whyVolunteer")?.value,
                linkedIn: this.userForm.get("linkedIn")?.value,
                skills: this.addedSkillsString,
                cityId: this.userForm.get("cityId")?.value,
                countryId: this.userForm.get("countryId")?.value,
                employeeId: this.userForm.get("employeeId")?.value,
                userId: this.userId,
            }
            if (!(typeof (this.avatar) == "undefined")) {
                this.userDetails.avatar = this.avatar;
            }
            this.userDetailsService.updateUserProfile(this.userDetails).subscribe({
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
