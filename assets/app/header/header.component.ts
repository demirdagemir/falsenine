import {Component} from "@angular/core";
import HeaderLogo from "./logo_with_title.svg"

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    images = {
        logo: 'search_bar_inspection_glass.svg'
    };
    search = {
        query: ''
    }

}