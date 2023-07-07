import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';

@Component({
  selector: 'app-share-story',
  templateUrl: './share-story.component.html',
  styleUrls: ['./share-story.component.scss'],
})
export class ShareStoryComponent implements OnInit {
  shareStoryForm: FormGroup;
  errorMessage = ErrorMessages;
  editorContent: string;
  public Editor = ClassicEditor;

  constructor(
    private formBuilder: FormBuilder,
    public formValidationService: FormValidationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  //function for create a form while initializing login page
  createForm() {
    this.shareStoryForm = this.formBuilder.group({
      storyTitle: ['', Validators.required],
      date: ['', Validators.required],
      myStory: ['', Validators.required],
    });
  }

  //function for ckeditor changes
  onEditorReady(editor: any) {
    editor.model.document.on('change:data', () => {
      this.editorContent = editor.getData();
    });
  }
}
