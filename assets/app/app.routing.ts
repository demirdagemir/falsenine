import {Routes, RouterModule} from "@angular/router";
import {PlayerComponent} from "./player_profile/player.component";
import {LandingComponent} from "./landing/landing.component";
import {ExComponent} from "./excomponent"

const APP_ROUTES: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full'},
    { path: 'player', component: PlayerComponent },
    { path: 'ex', component: ExComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
