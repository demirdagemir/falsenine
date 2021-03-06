import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HeaderComponent } from "./header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeContentComponent} from "./home_content/home-content.component";
import {FooterComponent} from "./footer/footer.component";
import {PlayerComponent} from "./player_profile/player.component";
import {routing} from "./app.routing";
import {LandingComponent} from "./landing/landing.component";
import {PlayerAttributesComponent} from "./player_profile/player_attributes/player-attributes.component";
import {ModalComponent} from "./modal/modal.component";
import {LoginModalComponent} from "./modal/login/login-modal";
import {SignupModalComponent} from "./modal/signup/signup-modal.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./modal/authentication/auth.service";
import {ExComponent} from "./excomponent"

@NgModule({
  declarations: [
      AppComponent,
      LandingComponent,
      HeaderComponent,
      HomeContentComponent,
      FooterComponent,
      PlayerComponent,
      PlayerAttributesComponent,
      ModalComponent,
      LoginModalComponent,
      SignupModalComponent,
      ExComponent
  ],
  imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
