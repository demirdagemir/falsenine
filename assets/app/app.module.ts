import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HeaderComponent } from "./header/header.component";
import {FormsModule} from "@angular/forms";
import {HomeContentComponent} from "./home_content/home-content.component";

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      HomeContentComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})

export class AppModule {

}
