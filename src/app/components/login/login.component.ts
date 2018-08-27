import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../modules/user/login/services/login.services';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: LoginService) {
        this.model.username = 'a';
        this.model.password = 's';
    }

    ngOnInit() {
        // reset login status

    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result) {
                    sessionStorage.setItem('currentUser', JSON.stringify({ username: this.model.username, token: result.token }));
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });

    }
}
