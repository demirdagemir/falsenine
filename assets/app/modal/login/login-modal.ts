import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../viewModels/user.model";
import {AuthService} from "../authentication/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: String;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit () {
        const user = new User(this.loginForm.value.email, this.loginForm.value.password);
        this.authService.signin(user).subscribe(
            data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                this.router.navigateByUrl('/player');
                this.errorMessage = null;
            },
            error => this.onError(error)
        );
        this.loginForm.reset();
    }

    ngOnInit () {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        })
    }

    onError (errorMessage) {
        this.errorMessage = errorMessage.error.message;
    }

}