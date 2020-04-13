import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public valid = false;
  public user;
  public LoginList = [
    {
      email: 'aasal_n@yahoo.com',
      pass: '123'
    },
    {
      email: 'hessam@gmail.com',
      pass: '123'
    },
    {
      email: 'aasal3_n@yahoo.com',
      pass: '654321'
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
  });

  ngOnInit() {
  }

  loginSystem(loginForm) {
    console.log('login',loginForm);
    this.user = this.LoginList.find(user => {
      return user.email == loginForm.value.email && user.pass == loginForm.value.pass;
    });
    if (this.user) {
     this.localStorageSetting(this.user);
      alert('login sucsess');
    } else {
      alert('user name or pass incorect');
    }
  }

   localStorageSetting(user: any) {
    localStorage.setItem('user', user.email);
  }
}
