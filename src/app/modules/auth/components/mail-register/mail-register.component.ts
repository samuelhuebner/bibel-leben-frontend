import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail-register',
  templateUrl: './mail-register.component.html',
  styleUrls: ['./mail-register.component.scss']
})
export class MailRegisterComponent implements OnInit {

  @Output() successEmitter = new EventEmitter<any>();

  public hidePassword = true;

  constructor(
    private authServ: AuthService,
    private formB: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  // send entered data to register
  onSubmit(registeringData): void {
    // this.authServ
    //   .register(this.f.email.value, this.f.pw.value)
    //   .then(() => this.successEmitter.emit(), (err) => { console.log(err); });
  }


  // custom validator
  // to check if password and confirm password match
  checkConfirmPassword(group: FormGroup): { notSame: boolean } {
    const pw = group.controls.pw.value;
    const confirmPw = group.controls.confirmPw.value;

    return pw === confirmPw ? null : { notSame: true }
  }
}
