import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HeaderComponent } from "./header/header.component";
import {FormsModule} from "@angular/forms";
import {HomeContentComponent} from "./home_content/home-content.component";
import {FooterComponent} from "./footer/footer.component";
import {PlayerComponent} from "./player_profile/player.component";
import {routing} from "./app.routing";
import {LandingComponent} from "./landing/landing.component";

@NgModule({
  declarations: [
      AppComponent,
      LandingComponent,
      HeaderComponent,
      HomeContentComponent,
      FooterComponent,
      PlayerComponent
  ],
  imports: [BrowserModule, FormsModule, routing],
  bootstrap: [AppComponent]
})

export class AppModule {

}
