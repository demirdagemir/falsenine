import {Routes, RouterModule} from "@angular/router";
import {PlayerComponent} from "./player_profile/player.component";
import {LandingComponent} from "./landing/landing.component";

const APP_ROUTES: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full'},
    { path: 'player', component: PlayerComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
