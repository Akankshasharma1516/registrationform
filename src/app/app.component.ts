import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  firstname: any;
  lastname: any;
  dob:any;
  gender:any;
  Email:any;
  Phonenumber:any;
  form = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("",[Validators.required]),
    dob:new FormControl(null,Validators.required),
    gender: new FormControl("",[Validators.required]),
    Email:new FormControl("",[Validators.required,Validators.email]),
    Phonenumber: new FormControl("",[Validators.required,Validators.minLength(10)])
  });

  onSubmit() {
    console.log(this.form.value);
    this.firstname = this.form.get('firstname')?.value;
    this.lastname = this.form.get('lastname')?.value;
    this.dob = this.form.get('dob')?.value;
    this.gender = this.form.get('gender')?.value;
    this.Email = this.form.get('Email')?.value;
    this.Phonenumber = this.form.get('Phonenumber')?.value;


  }
}


