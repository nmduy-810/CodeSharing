import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    userName: string;
    isAuthenticated: boolean;
    subscription: Subscription;

    constructor(public sidebarservice: SidebarService, public router: Router, private authService: AuthService) 
    {
    }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {

        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar")
            }), 
            $(".search-close").on("click", function () {
                $(".search-bar").removeClass("full-search-bar")
            })
        });

        this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
        this.userName = this.authService.name;
    }

    async signout() {
        await this.authService.signout();
    }
}
