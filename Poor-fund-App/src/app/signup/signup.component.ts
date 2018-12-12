import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn()]
})
export class SignupComponent implements OnInit {
  state: '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {

  }
  // TO BIND EXPORTED ANIMATION FUNCTION
@HostBinding('@moveIn')


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        this.router.navigate(['/manage']);
      }).catch(
        (err) => {
        this.error = err;
      });
    }
  }

  ngOnInit() {
  }

}
