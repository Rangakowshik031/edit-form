// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'user-form/:id', component: UserFormComponent },
  
  // Add other routes as needed
];

@NgModule({
  declarations: [
    UserFormComponent,
    AppComponent
    // Add other components here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
  ],
  bootstrap: [AppComponent] // You might need to change this based on your app structure
})
export class AppModule { }
