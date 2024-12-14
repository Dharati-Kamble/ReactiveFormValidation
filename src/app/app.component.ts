import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})
export class AppComponent {
  //title = 'Assignments13Form';

  // Inject FormBuilder service
public fbobj = new FormBuilder();

states = ['Maharashtra', 'Gujarat', 'Uttar Pradesh'];
myForm = this.fbobj.group(
  {
    // Add Multiple validations
    first_name :['', [Validators.required, Validators.pattern('^[A-Za-z]+$')] ],
    last_name :['', [Validators.required, Validators.pattern('^[A-Za-z]+$')] ],
    email :['', [Validators.required,Validators.pattern('^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}$')] ],
    phone : ['',[Validators.required, Validators.pattern('^\\d{10}$')]],
    city : ['',[Validators.required, Validators.pattern('^[A-Za-z]{4,}$')]],
    state : ['',[Validators.required]],
    zip_code : ['',[Validators.required,Validators.pattern('^\\d{5}$')]]
  }
);

onSubmit() {
  if (this.myForm.valid) {
    console.log(this.myForm.value);
  } else {
    console.log('Form is invalid!');
  }
}

get f() {
  return this.myForm.controls;
}

}
