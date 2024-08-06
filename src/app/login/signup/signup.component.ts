import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private signupService: SignupService
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator()
    });
  }

  // Define the validator function that returns a ValidatorFn
  passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl): { [key: string]: boolean } | null => {
      const formGroup = form as FormGroup;
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    };
  }

  closeForm(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const { username, password } = this.signupForm.value;
      
      // Create a data object that matches what your PHP script expects
      const signupData = { username, password };
      
      this.signupService.submitSignupForm(signupData).subscribe({
        next: response => {
          if (response.status === 'success') {
            this.errorMessage = null;
            console.log('Signup Successful:', response.message);
            // Optionally, navigate to a different page on success
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error: err => {
          this.errorMessage = 'An error occurred while submitting the form.';
          console.error('Error:', err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
  
  
}
