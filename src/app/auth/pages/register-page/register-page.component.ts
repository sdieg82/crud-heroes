import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [   
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb=inject(FormBuilder)
  public myForm:FormGroup=this.fb.group({

  })

  onSubmit():void{
    
  }

}
