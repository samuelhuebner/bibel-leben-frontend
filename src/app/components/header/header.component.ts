import { Component, Input, OnInit } from "@angular/core";
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() transparent: boolean;

    public appName = environment.appName;
    public loading: boolean;

    ngOnInit(): void {
    }

    public onLogout() {
        
    }
}