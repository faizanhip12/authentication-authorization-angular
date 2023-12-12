import { Component } from '@angular/core';

@Component({
  selector: 'app-product-rarttings',
  templateUrl: './product-rarttings.component.html',
  styleUrls: ['./product-rarttings.component.css']
})
export class ProductRarttingsComponent {
  private unsavedChanges = false;
  selectedRating: number | null = null;

  rateProduct() {
    if (this.selectedRating !== null) {
      console.log('Rating:', this.selectedRating);
      this.unsavedChanges = true;
    }
  }

  saveChanges() {
    console.log('Saving changes...');
    this.unsavedChanges = false;
  }

  hasUnsavedChanges(): boolean {
    return this.unsavedChanges;
  }
}
