import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
    private returnUrl: string;

    public selected: FormControl;
    public seeForgottonPassword: boolean;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.seeForgottonPassword = true;
        this.selected = new FormControl(0);

        // stores return-url from query-param retUrl so that the user can continue where he left when logging in
        this.returnUrl = this.route.snapshot.queryParams.retUrl || '/home';
    }

    public async onMailLogin(data: { email: string, password: string}): Promise<void> {
        try {
            await this.authService.login(data.email, data.password);
            this.onLoginComplete();
        } catch (error) {
            // console.log(error);
            // TODO: Display all possible error outcomes e.g: invalid password ...
            if (error.code === 'auth/user-not-found') {
                this.snackbar.open('Benutzer nicht gefunden!', 'Okay', { duration: 3000 });
            }
        }
    }

    /**
     * Function that navigates the router to the stored return url
     */
    onLoginComplete(): void {
        this.router.navigate([this.returnUrl]);
    }

}
