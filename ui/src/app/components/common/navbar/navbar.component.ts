import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {StorageService} from "../../../../service/storage.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    currentUser: any;
    isLoggedIn = false;

    constructor(public authService: AuthService, public storageService: StorageService) {
    }

    ngOnInit(): void {
        this.currentUser = this.storageService.getUser();
        this.isLoggedIn = this.storageService.isLoggedIn();
    }

    switcherClassApplied = false;

    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    searchClassApplied = false;

    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    classApplied = false;

    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    logout(): void {
        // this.authService.logout().subscribe({
        //     next: res => {
        //         console.log(res);
        this.storageService.clean();

        window.location.reload();
        //     },
        //     error: err => {
        //         console.log(err);
        //     }
        // });
    }


}