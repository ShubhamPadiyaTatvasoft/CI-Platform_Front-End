import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { StoryService } from '../../services/story.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-share-story',
  templateUrl: './share-story.component.html',
  styleUrls: ['./share-story.component.scss'],
})

export class ShareStoryComponent implements OnInit {
  userId: number;
  shareStoryForm: FormGroup;
  errorMessage = ErrorMessages;
  editorContent: string;
  public Editor = ClassicEditor;
  uploadedImages: File[] = [];
  selectedMissionId: string;
  missions: any[] = [];
  token: any;

  constructor(
    private formBuilder: FormBuilder,
    public formValidationService: FormValidationService,
    private storyService: StoryService,
    private sanitizer: DomSanitizer,
    private loginService: LoginServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.token = this.loginService.getToken();
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    this.userId = decodedToken['unique_name'].split(',')[2];
    this.getListOfMissions(this.userId);
  }

  createForm() {
    this.shareStoryForm = this.formBuilder.group({
      selectedMissionId: ['', Validators.required],
      storyTitle: ['', Validators.required],
      date: ['', Validators.required],
      myStory: ['', Validators.required],
    });
  }

  getListOfMissions(userId: number) {
    this.storyService.getApprovedMissions(userId).subscribe((response) => {
      if (response && response.data) {
        this.missions = response.data;
      }
    });
  }

  handleImageUpload(event: any) {
    const files = event.currentTarget.files;

    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      this.uploadedImages.push(...fileArray);
    }
  }

  removeImage(file: File) {
    const index = this.uploadedImages.indexOf(file);
    if (index !== -1) {
      this.uploadedImages.splice(index, 1);
    }
  }

  clearAllImages() {
    this.uploadedImages = [];
  }

  getImgSrc(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
  }

  saveStory() {
    if (this.shareStoryForm.valid && this.shareStoryForm.value.selectedMissionId) {
      const formData = new FormData();
      const storyTitle = this.shareStoryForm.get('storyTitle')?.value;
      const myStory = this.shareStoryForm.get('myStory')?.value;

      formData.append('Title', storyTitle);
      formData.append('Description', myStory);
      formData.append('MissionId', this.shareStoryForm.value.selectedMissionId);
      formData.append('UserId', this.userId.toString());

      this.uploadedImages.forEach((image: File) =>
        formData.append('Images', image)
      );
      this.storyService.saveStory(formData).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Form is invalid or no mission selected');
    }
  }

  onEditorReady(editor: any) {
    editor.model.document.on('change:data', () => {
      this.editorContent = editor.getData();
    });
  }
}
