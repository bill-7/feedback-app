import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {

  submitClicked = false

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  feedbackForm = this.formBuilder.group({
    name: new FormControl("", { validators: [Validators.pattern(/^([^0-9]*)$/)] }),
    companyName: "",
    jobTitle: "",
    yearsInRole: "",
    likes: ""
  });

  checkForExample() {
    if (this.feedbackForm.controls.companyName.value == "example") {
      this.feedbackForm.reset()
      this.feedbackForm.controls.companyName.setValue("Demo Entry Inc")
    }
  }

  isControlValid(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || this.submitClicked)
  }

  onSubmit() {
    this.submitClicked = true
    if (this.feedbackForm.valid)
      this.router.navigate([`/thankyou`], { queryParams: { companyName: this.feedbackForm.controls.companyName.value } })
  }
}


