import {Component, OnInit} from '@angular/core'
import {AuthService} from "../authentication/auth.service";
import {User} from "../../viewModels/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'signup-modal',
    templateUrl: './signup-modal.component.html',
    styleUrls: ['./signup-modal.component.scss']
})

export class SignupModalComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private authService: AuthService) {}

    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.username,
            this.signUpForm.value.password,
            this.signUpForm.value.firstName,
            this.signUpForm.value.lastName,
            this.signUpForm.value.favoritePlayer,
            this.signUpForm.value.favoriteTeam
        );
        this.authService.signup(user).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
        this.signUpForm.reset();
    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            username: new FormControl(null, Validators.required),
            favoriteTeam: new FormControl(null),
            favoritePlayer: new FormControl(null)

        })
    }

}

