import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  contactForm: FormGroup;
  // displayText : string = '';
  submissionResult : string | null = null ;

  constructor(private fb: FormBuilder, private contactService: ContactService){
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      number:['',[Validators.required,Validators.pattern(/^\d+$/)]],
      address:['',Validators.required]
    })
  }


  // onSubmit(){
  //   if(this.contactForm.valid){
  //     this.displayText('Form Submitted!',this.contactForm.value);
  //   }
  // }
  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, number, address } = this.contactForm.value;
      this.contactService.submitContactForm(name, number, address).subscribe({
        next: response => {
          if (response.status === 'success') {
            this.submissionResult = response.message;
          } else {
            this.submissionResult = response.message;
          }
        },
        error: err => {
          this.submissionResult = 'An error occurred while submitting the form.';
          console.error('Error submitting form:', err);
        }
      });
    }
  }
  
  

  displayText(message:string,formData:any){
    this.submissionResult = `${message}`;
    console.log('Form Data: ',formData)
  }
  
}
