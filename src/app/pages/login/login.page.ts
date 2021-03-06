import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(email, password) {
    this.authService.loginUser(email.value, password.value)
    .then((resp) => {
      this.router.navigate(['home']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

}
