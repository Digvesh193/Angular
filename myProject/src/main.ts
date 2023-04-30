import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//3 application

// 1.app => form => input,radio,checkbox,dropdown => localstorage
// 2.account => form => app => localstorage
// 3.user => 
