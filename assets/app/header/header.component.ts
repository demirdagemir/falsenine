import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../modal/authentication/auth.service";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService){}

    searchForm: FormGroup;

    onSubmit() {
        console.log(this.searchForm);
        this.router.navigate(['/player']);
    }

    ngOnInit() {
        this.searchForm = new FormGroup({
            searchQuery: new FormControl(null)
        });
    }

    onLogout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}