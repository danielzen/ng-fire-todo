import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  LoginGmail(): any {
    return this.AuthLogin(new GoogleAuthProvider()).then(() => {
      this.router.navigate(['/list']);
    });
  }

  AuthLogin(provider: any): any {
    return this.angularFireAuth.signInWithPopup(provider)
      .catch((error: any) => {
        console.error(error);
      });
  }
}
