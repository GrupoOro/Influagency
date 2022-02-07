import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(//private firestore: AngularFirestore,
              //private firestoreService: FirestoreService,
              private angularFireAuth: AngularFireAuth,
              private router: Router,
              private ngZone: NgZone) { }

  loginUser(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  registerUser(email, password) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }
}
