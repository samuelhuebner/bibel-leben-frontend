import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail-register',
  templateUrl: './mail-register.component.html',
  styleUrls: ['./mail-register.component.scss']
})
export class MailRegisterComponent implements OnInit {

  @Output() successEmitter = new EventEmitter<any>();

  public hidePassword = true;
  public registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      dataConsent: new FormControl('', Validators.required)
    }, this.checkConfirmPassword );
  }

  // send entered data to register
  onSubmit(): void {
    // this.authServ
    //   .register(this.f.email.value, this.f.pw.value)
    //   .then(() => this.successEmitter.emit(), (err) => { console.log(err); });
  }


  // custom validator
  // to check if password and confirm password match
  checkConfirmPassword(group: FormGroup): { notSame: boolean } {
    const pw = group.controls.password.value;
    const confirmPw = group.controls.confirmPassword.value;

    return pw === confirmPw ? null : { notSame: true }
  }
}
