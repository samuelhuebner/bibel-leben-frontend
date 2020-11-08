import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthComponent } from './container/auth.component';
import { MailLoginComponent } from './components/mail-login/mail-login.component';
import { ProviderAuthComponent } from './components/provider-auth/provider-auth.component';
import { MailRegisterComponent } from './components/mail-register/mail-register.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,

        FormsModule,
        ReactiveFormsModule,

        MatTabsModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatSnackBarModule
    ],
    declarations: [
        AuthComponent,
        MailLoginComponent,
        ProviderAuthComponent,
        MailRegisterComponent,
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule { }
