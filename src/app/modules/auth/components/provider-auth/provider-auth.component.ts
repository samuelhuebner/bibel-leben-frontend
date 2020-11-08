import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-provider-auth',
    templateUrl: 'provider-auth.component.html',
    styleUrls: ['provider-auth.component.scss']
})
export class ProviderAuthComponent implements OnInit {
    @Output() successEmitter = new EventEmitter();

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.matIconRegistry
            .addSvgIcon('google', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/provider/google.svg'));
    }


    public loginWithProvider(provider: string): void {
        this.authService.providerLogin(provider).then((res) => this.successEmitter.emit(), (err: Error) => { console.log(err); });
    }

}
