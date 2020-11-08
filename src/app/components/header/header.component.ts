import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { bl19personOwn } from 'src/app/models/bl.models';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    @Input() transparent: boolean;

    public appName = environment.appName;
    public loading: boolean;
    public isLoggedIn: boolean;
    public loadingSubscription: Subscription;

    private userDataSubscribtion: Subscription;
    public userData: bl19personOwn;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (this.transparent) {
            window.addEventListener('scroll', this.scroll, true);
        }

        this.authService.isLoggedIn().subscribe((value) => {
            this.isLoggedIn = value;
        });

        this.userDataSubscribtion = this
            .authService.getUserDataObservable()
            .subscribe((userData: bl19personOwn) => {
                if (userData) {
                    this.userData = userData;
                }
            });
    }

    ngOnDestroy(): void {
        window.removeEventListener('scroll', this.scroll, true);

        // unsubscribing from observables
        this.authService.isLoggedIn().unsubscribe();

        this.loadingSubscription.unsubscribe();

        if (this.userDataSubscribtion) {
            this.userDataSubscribtion.unsubscribe();
        }
    }

    /**
     * Function handler that navigates to the auth route with the currently enabled route as a query param
     */
    public onAuthClick(): void {
        const retUrl = this.router.url.split('/')[1];
        this.router.navigate([`auth`], { queryParams: { retUrl }});
    }

    /**
     * Logout button click handler
     */
    public onLogout(): Promise<void> {
        return this.authService.logout();
    }


    private scroll(): void {
        const num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (num > 300) {
          this.transparent = false;
        } else if (num < 300) {
          this.transparent = true;
        }
    }
}
