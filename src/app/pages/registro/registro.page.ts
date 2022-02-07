import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  register(email, password) {
    this.authService.registerUser(email.value, password.value)
    .then( (resp) => {
      this.router.navigate(['login']);
    }).catch( (error) => {
      window.alert(error.message);
    });
  }

}
