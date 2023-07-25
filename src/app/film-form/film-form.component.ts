import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class FilmFormComponent implements OnInit {
  filmForm!: FormGroup;
  formDataSummary: any = {};
  activeSection: number = 1;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filmForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Year: ['', Validators.required],
      Plot: ['', Validators.required],
      Poster: ['', Validators.required]
    });
  }

  prevSection() {
    if (this.activeSection > 1) {
      this.activeSection--;
    }
  }

  nextSection() {
    const currentFormControl = this.getFormControlForSection(this.activeSection);
    currentFormControl.markAsTouched();
  
    if (currentFormControl.valid) {
      // Store the current section's form data in formDataSummary
      this.formDataSummary = {
        ...this.formDataSummary,
        ...this.filmForm.value,
      };
  
      this.activeSection++;
    } else {
      // Handle form validation errors
      console.log('Form is invalid.');
    }
  }
  
  getFormControlForSection(section: number): AbstractControl {
    switch (section) {
      case 1:
        return this.filmForm.get('Title')!;
      case 2:
        return this.filmForm.get('Year')!;
      case 3:
        return this.filmForm.get('Plot')!;
      case 4:
        return this.filmForm.get('Poster')!;
      default:
        throw new Error('Invalid section number.');
    }
  }
  
  isFieldInvalid(field: string): boolean {
    const control = this.getFormControlForSection(this.activeSection);
    return control ? control.invalid && control.touched : false;
  }
  

  submitForm() {
    console.log('submitted ');
    // If the form is already submitted, return to prevent multiple submissions
    if (this.formDataSummary) {
      console.log('Form already submitted.');
      return;
    }

    // At this point, the form data is stored in formDataSummary
    // You can choose to submit the form data here or perform any other actions

    console.log('Form Data Summary:', this.formDataSummary);
    // Submit the form or perform other actions as needed

    // Reset the form for the next section
    this.filmForm.reset();
    this.activeSection = 1;

    // Set the formDataSummary to null to prevent multiple submissions
    this.formDataSummary = null;
  }

  onSubmit() {
    // throw new Error('Method not implemented.');
  }
}
