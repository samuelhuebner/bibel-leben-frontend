import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-mail-login',
    templateUrl: './mail-login.component.html',
    styleUrls: ['./mail-login.component.scss']
})
export class MailLoginComponent {

    @Output() loginOutput = new EventEmitter<{ email: string, password: string }>();

    // public loginForm: FormGroup;
    public hidePassword = true;

    constructor() { }

    public onSubmit(loginData: { email: string, password: string }): void {
        this.loginOutput.emit(loginData);
    }
}
