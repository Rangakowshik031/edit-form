// src/app/components/user-form/user-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = { id: 1, name: '', email: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('id');
    
    // Check if userIdParam is not null or undefined
    const userId = userIdParam ? +userIdParam : 0; // Set a default value, e.g., 0
    
    // Simulate fetching user data by ID (replace with actual service call)
    this.user = { id: userId, name: 'John Doe', email: 'john.doe@example.com' };
  }

  onSave(): void {
    console.log('User before update:', this.user); // Log the user data before the update

    // Simulate updating user data (replace with actual service call)
    console.log('User updated successfully', this.user);
    // Simulate updating user data (replace with actual service call)
    console.log('User updated successfully', this.user);
    this.router.navigate(['/user-list']); // Navigate to the user list page
  }
}
