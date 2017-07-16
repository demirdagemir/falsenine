import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../modal/authentication/auth.service";
import {PlayerSearch} from "./playerSearch.service";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [PlayerSearch]
})

export class HeaderComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService, private playerSearch: PlayerSearch){}

    searchForm: FormGroup;
    playerId: Number;

    onSubmit() {
        this.playerSearch.getSearchPlayerResult(this.searchForm.value.searchQuery).subscribe(
            data => {
                this.playerId = data.playerId;
                if (this.playerId) {
                    this.router.navigate(['/player', this.playerId]);
                }
            },
            error => console.log(error)
        );
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