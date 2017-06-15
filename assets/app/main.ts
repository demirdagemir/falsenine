import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'
import 'bootstrap/dist/css/bootstrap.css'

platformBrowserDynamic().bootstrapModule(AppModule);
