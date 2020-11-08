import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { bl19personOwn } from 'src/app/models/bl.models';
import { error } from 'protractor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mail-register',
  templateUrl: './mail-register.component.html',
  styleUrls: ['./mail-register.component.scss']
})
export class MailRegisterComponent implements OnInit {

  @Output() successEmitter = new EventEmitter<any>();

  public hidePassword = true;
  public registerForm: FormGroup;

  private updateData: bl19personOwn;

  constructor(
    private authService: AuthService,
    private userService: UserService
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

  /**
   * Submit handler for the register button. Creates a new user and attempts to update
   * the userdata 1 minute after creation
   */
  public async onSubmit(): Promise<void> {
    const userCredential = await this.authService
      .register(this.registerForm.value.email, this.registerForm.value.password);

    this.updateData = {
      UID: userCredential.user.uid,
      name: `${this.registerForm.value.firstname} ${this.registerForm.value.lastname}`
    };

    // calls the updateUserHandler to update the user after 1 minute
    // TODO: find a better solution
    setTimeout(this.updateUserHandler.bind(this), 60000);
  }

  private updateUserHandler(): void {
    this.userService.updateUserData(this.updateData);
  }


  // custom validator
  // to check if password and confirm password match
  checkConfirmPassword(group: FormGroup): { notSame: boolean } {
    const pw = group.controls.password.value;
    const confirmPw = group.controls.confirmPassword.value;

    return pw === confirmPw ? null : { notSame: true }
  }
}
