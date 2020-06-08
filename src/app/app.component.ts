import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUp: NgForm;
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUp.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUp.value.userData.username;
    this.user.email = this.signUp.value.userData.email;
    this.user.secretQuestion = this.signUp.value.secret;
    this.user.answer = this.signUp.value.questionAnswer;
    this.user.gender = this.signUp.value.gender;

    this.signUp.reset();
  }
}
