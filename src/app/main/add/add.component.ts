import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoesService } from '../../services/shoes.service';
import { ShoeListings } from '../../services/shoe-listings';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  newShoeForm: FormGroup;
  submissionResult: string | null = null;
  newShoeDetails: any;
  previousUrl: string = '/';

  constructor(private fb: FormBuilder, private shoeService: ShoesService, private router:Router, private navigationService: NavigationService) {
    this.newShoeForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      photoUrl: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.previousUrl = this.navigationService.getPreviousUrl();
  }

  onSubmit(): void {
    if (this.newShoeForm.valid) {
      // Extract form values and convert the price to a number
      const formValues = this.newShoeForm.value;
      const newShoe: ShoeListings = {
        id: 0, // Placeholder; will be set by the service
        name: formValues.name,
        price: parseFloat(formValues.price), // Convert price to number
        imageUrl: formValues.photoUrl,
        details: formValues.details
      };

      this.shoeService.addShoe(newShoe);
      this.submissionResult = 'Shoe added successfully!';
      this.newShoeDetails = newShoe;
      console.log('New Shoe Details:', newShoe);
      this.newShoeForm.reset();
    } else {
      this.submissionResult = 'Please fill out the form correctly.';
    }
  }

  closeForm(): void {
    this.router.navigateByUrl(this.previousUrl);  
  }
}